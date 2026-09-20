import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufm-cjv9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ufm-cjv9y"/>`,
		"fallback": "solar:map-point-school-outline",
	});
}

export default Component;
