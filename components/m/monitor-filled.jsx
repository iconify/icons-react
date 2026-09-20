import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfb18lbks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfb18lbks"/>`,
		"fallback": "ix:monitor-filled",
	});
}

export default Component;
