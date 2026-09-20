import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8ksa1bbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8ksa1bbo"/>`,
		"fallback": "selfhst:mainsail-light",
	});
}

export default Component;
