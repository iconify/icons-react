import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pp0_osrls.css';
import '../../css/n/neu5avb7z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pp0_osrls"/><path class="neu5avb7z"/></g>`,
		"fallback": "streamline:one-finger-tap",
	});
}

export default Component;
