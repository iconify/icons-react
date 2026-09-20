import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0lt7xb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0lt7xb7d"/>`,
		"fallback": "si:rupee-fill",
	});
}

export default Component;
