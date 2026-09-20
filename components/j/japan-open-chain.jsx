import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j145oz9rj.css';
import '../../css/a/acy54mpdx.css';
import '../../css/z/zd6xu_b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGLHjr9b4M" class="j145oz9rj"/></defs><path class="acy54mpdx"/><use href="#SVGLHjr9b4M"/><path class="zd6xu_b-s"/><use href="#SVGLHjr9b4M"/>`,
		"fallback": "token:japan-open-chain",
	});
}

export default Component;
