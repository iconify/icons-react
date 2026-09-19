import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkkp8_bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkkp8_bwt"/>`,
		"fallback": "cbi:nanoleaf-hex-grain",
	});
}

export default Component;
