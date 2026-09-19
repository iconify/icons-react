import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opoks_fjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opoks_fjx"/>`,
		"fallback": "icon-park-outline:link-break",
	});
}

export default Component;
