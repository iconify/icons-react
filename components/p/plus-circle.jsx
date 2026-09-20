import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_mhsgprf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_mhsgprf"/>`,
		"fallback": "memory:plus-circle",
	});
}

export default Component;
