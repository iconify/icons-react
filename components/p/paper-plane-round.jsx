import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmvh42bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmvh42bgf"/>`,
		"fallback": "coolicons:paper-plane-round",
	});
}

export default Component;
