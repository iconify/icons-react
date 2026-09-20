import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq0l3cvad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq0l3cvad"/>`,
		"fallback": "mdi:invoice-text-edit-outline",
	});
}

export default Component;
