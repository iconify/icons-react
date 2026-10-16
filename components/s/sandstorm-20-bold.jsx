import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yszp-9b8p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yszp-9b8p"/>`,
		"fallback": "energy-icons:sandstorm-20-bold",
	});
}

export default Component;
