import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kmj_7ubfc.css';
import '../../css/l/lx14d1bki.css';
import '../../css/u/u3r5afb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kmj_7ubfc"/><path class="lx14d1bki"/><path class="u3r5afb8y"/></g>`,
		"fallback": "reicon:messages2",
	});
}

export default Component;
