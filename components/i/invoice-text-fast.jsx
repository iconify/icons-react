import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahzi-5k8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahzi-5k8f"/>`,
		"fallback": "mdi:invoice-text-fast",
	});
}

export default Component;
