import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kci_ppyst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kci_ppyst"/>`,
		"fallback": "streamline-ultimate:medical-instrument-scalpel-bold",
	});
}

export default Component;
