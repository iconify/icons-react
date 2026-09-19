import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi5kcp12w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi5kcp12w"/>`,
		"fallback": "devicon-plain:netbox-wordmark",
	});
}

export default Component;
