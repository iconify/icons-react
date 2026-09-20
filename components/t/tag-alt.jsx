import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h1nn-jy_b.css';
import '../../css/j/j948f2vjw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h1nn-jy_b"/><path class="j948f2vjw"/></g>`,
		"fallback": "streamline:tag-alt",
	});
}

export default Component;
