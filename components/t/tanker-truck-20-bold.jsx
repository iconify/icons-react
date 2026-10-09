import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpxwtybmx.css';
import '../../css/n/n9tjabbib.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpxwtybmx"/><path class="n9tjabbib"/>`,
		"fallback": "energy-icons:tanker-truck-20-bold",
	});
}

export default Component;
