import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngiq-1ujy.css';
import '../../css/z/zy6f7biep.css';
import '../../css/l/l5bld93kj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ngiq-1ujy"/><path class="zy6f7biep"/><path class="l5bld93kj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-taking-bath",
	});
}

export default Component;
