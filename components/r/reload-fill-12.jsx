import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht2k5ha8x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht2k5ha8x"/>`,
		"fallback": "garden:reload-fill-12",
	});
}

export default Component;
