import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivguv72lz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivguv72lz"/>`,
		"fallback": "ix:standby",
	});
}

export default Component;
