import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqc7qacoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqc7qacoz"/>`,
		"fallback": "proicons:text-underline",
	});
}

export default Component;
