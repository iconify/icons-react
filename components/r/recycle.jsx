import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f79hcz9hs.css';
import '../../css/u/u5elemb2w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f79hcz9hs"/><path class="u5elemb2w"/></g>`,
		"fallback": "glyphs:recycle",
	});
}

export default Component;
