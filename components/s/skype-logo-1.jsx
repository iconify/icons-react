import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kg4433trr.css';
import '../../css/z/z__6jchhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kg4433trr"/><path class="z__6jchhl"/></g>`,
		"fallback": "streamline-logos:skype-logo-1",
	});
}

export default Component;
