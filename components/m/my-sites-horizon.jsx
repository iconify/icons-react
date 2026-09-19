import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otpdxvb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otpdxvb8b"/>`,
		"fallback": "gridicons:my-sites-horizon",
	});
}

export default Component;
