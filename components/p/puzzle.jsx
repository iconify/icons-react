import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4hcmvbru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4hcmvbru"/>`,
		"fallback": "flat-color-icons:puzzle",
	});
}

export default Component;
