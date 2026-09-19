import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ymz9_gbky.css';
import '../../css/b/bolb5gbrp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ymz9_gbky"/><path class="bolb5gbrp"/></g>`,
		"fallback": "glyphs:truck",
	});
}

export default Component;
