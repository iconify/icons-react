import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukc5chhna.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukc5chhna"/>`,
		"fallback": "energy-icons:oil-spill-20-bold",
	});
}

export default Component;
