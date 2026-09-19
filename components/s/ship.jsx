import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vf7d426xi.css';
import '../../css/l/leg17ac7z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vf7d426xi"/><path class="leg17ac7z"/></g>`,
		"fallback": "glyphs:ship",
	});
}

export default Component;
