import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e_7hchzpy.css';
import '../../css/b/bhpq5bzma.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e_7hchzpy"/><path class="bhpq5bzma"/></g>`,
		"fallback": "glyphs:object-group",
	});
}

export default Component;
