import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sw4ggjusk.css';
import '../../css/z/z-76k5bbg.css';
import '../../css/v/v-nd48wyt.css';
import '../../css/e/eoer0xs2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sw4ggjusk"/><path class="z-76k5bbg"/><path class="v-nd48wyt"/><path class="eoer0xs2e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-surfing",
	});
}

export default Component;
