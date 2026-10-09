import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msk6w7bmt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msk6w7bmt"/>`,
		"fallback": "energy-icons:plane-20",
	});
}

export default Component;
