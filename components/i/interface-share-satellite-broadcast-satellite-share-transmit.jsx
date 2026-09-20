import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/habuhrsiq.css';
import '../../css/z/z70_5fbzp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="habuhrsiq"/><path class="z70_5fbzp"/></g>`,
		"fallback": "streamline:interface-share-satellite-broadcast-satellite-share-transmit",
	});
}

export default Component;
