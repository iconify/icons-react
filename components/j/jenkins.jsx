import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovnuc44id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovnuc44id"/>`,
		"fallback": "simple-icons:jenkins",
	});
}

export default Component;
