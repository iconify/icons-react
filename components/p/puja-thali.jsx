import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/csu3b8b4f.css';
import '../../css/s/sjc89-b7y.css';
import '../../css/e/ew_2kkqtn.css';
import '../../css/t/tpe1l9buk.css';
import '../../css/x/xtb32yaox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="csu3b8b4f wm-shadow"/><path class="sjc89-b7y"/><path class="ew_2kkqtn"/><path class="tpe1l9buk"/><path class="xtb32yaox"/></g>`,
		"fallback": "withicons-retro:puja-thali",
	});
}

export default Component;
