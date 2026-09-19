import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i27k4gb-i.css';
import '../../css/b/bsvw6huwc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i27k4gb-i"/><path class="bsvw6huwc"/></g>`,
		"fallback": "glyphs:lightning-1",
	});
}

export default Component;
