import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyif2rord.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vyif2rord"/>`,
		"fallback": "ix:limits-check",
	});
}

export default Component;
