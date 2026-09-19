import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q7mj0gb5l.css';
import '../../css/l/l-0km31fe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q7mj0gb5l"/><path class="l-0km31fe"/></g>`,
		"fallback": "glyphs:signal-rod",
	});
}

export default Component;
