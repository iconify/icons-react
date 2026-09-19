import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7bb-0img.css';
import '../../css/c/c5wo2xbbj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w7bb-0img"/><path class="c5wo2xbbj"/></g>`,
		"fallback": "glyphs:tachometer",
	});
}

export default Component;
