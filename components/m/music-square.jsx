import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z6re8rbyg.css';
import '../../css/c/c8g3qn12o.css';
import '../../css/r/rn_2rcb1r.css';
import '../../css/e/enkc5xb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z6re8rbyg"/><path class="c8g3qn12o"/><path class="rn_2rcb1r"/><path class="enkc5xb3x"/></g>`,
		"fallback": "reicon:music-square",
	});
}

export default Component;
