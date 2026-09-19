import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i6jo9jcep.css';
import '../../css/b/bxximwbyx.css';
import '../../css/m/mv-hq9vel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i6jo9jcep"/><path class="bxximwbyx"/><path class="mv-hq9vel"/></g>`,
		"fallback": "hugeicons:material-and-texture",
	});
}

export default Component;
