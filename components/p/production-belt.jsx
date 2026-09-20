import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wy29ucbgz.css';
import '../../css/f/fr8mmdnuu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wy29ucbgz"/><path class="fr8mmdnuu"/></g>`,
		"fallback": "streamline:production-belt",
	});
}

export default Component;
