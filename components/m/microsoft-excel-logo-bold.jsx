import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/askc1k7ji.css';
import '../../css/g/g-8oyehcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="askc1k7ji"/><path class="g-8oyehcr"/>`,
		"fallback": "streamline-ultimate:microsoft-excel-logo-bold",
	});
}

export default Component;
