import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g2pe9wdlp.css';
import '../../css/s/s5oxnvbtl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g2pe9wdlp"/><path class="s5oxnvbtl"/></g>`,
		"fallback": "glyphs:lock",
	});
}

export default Component;
