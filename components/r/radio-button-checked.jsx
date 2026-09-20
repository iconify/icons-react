import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx7n_hboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx7n_hboi"/>`,
		"fallback": "mdi:radio-button-checked",
	});
}

export default Component;
