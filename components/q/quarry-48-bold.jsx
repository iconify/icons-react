import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffan0e92o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffan0e92o"/>`,
		"fallback": "energy-icons:quarry-48-bold",
	});
}

export default Component;
