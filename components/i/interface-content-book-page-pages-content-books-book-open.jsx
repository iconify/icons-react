import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q1u2c9bjm.css';
import '../../css/a/a9pqddc6d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q1u2c9bjm"/><path class="a9pqddc6d"/></g>`,
		"fallback": "streamline:interface-content-book-page-pages-content-books-book-open",
	});
}

export default Component;
