import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf6sk9b_n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf6sk9b_n"/>`,
		"fallback": "streamline:interface-home-1-home-house-map-roof",
	});
}

export default Component;
