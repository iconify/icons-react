import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8c3n5wqq.css';
import '../../css/f/fyntx0zul.css';
import '../../css/y/ym8aceb4z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z8c3n5wqq"/><path clip-rule="evenodd" class="fyntx0zul"/><path class="ym8aceb4z"/></g>`,
		"fallback": "glyphs-poly:rocket",
	});
}

export default Component;
