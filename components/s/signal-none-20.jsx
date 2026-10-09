import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcda5wmtv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcda5wmtv"/>`,
		"fallback": "energy-icons:signal-none-20",
	});
}

export default Component;
