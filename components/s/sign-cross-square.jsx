import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kw6slhbeu.css';
import '../../css/c/cn71heb0z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kw6slhbeu"/><path class="cn71heb0z"/></g>`,
		"fallback": "streamline:sign-cross-square",
	});
}

export default Component;
