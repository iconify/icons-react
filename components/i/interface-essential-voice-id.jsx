import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0okdlb4t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0okdlb4t"/>`,
		"fallback": "streamline-pixel:interface-essential-voice-id",
	});
}

export default Component;
