import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhbw-h_zy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhbw-h_zy"/>`,
		"fallback": "garden:plus-fill-12",
	});
}

export default Component;
