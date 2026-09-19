import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/do-sjpbog.css';
import '../../css/j/jlj1570im.css';
import '../../css/u/uru88vgdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="do-sjpbog"/><path class="jlj1570im"/><path class="uru88vgdy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:left-luggage",
	});
}

export default Component;
