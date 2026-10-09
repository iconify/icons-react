import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nehc85b4d.css';
import '../../css/g/gjporh8py.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nehc85b4d"/><path class="gjporh8py"/>`,
		"fallback": "energy-icons:user-search-20-bold",
	});
}

export default Component;
