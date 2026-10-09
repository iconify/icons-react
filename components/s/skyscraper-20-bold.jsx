import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrwbit1kg.css';
import '../../css/l/l_fhzdbgx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrwbit1kg"/><path class="l_fhzdbgx"/>`,
		"fallback": "energy-icons:skyscraper-20-bold",
	});
}

export default Component;
