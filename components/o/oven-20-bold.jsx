import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npwtzq6gi.css';
import '../../css/u/uq5sy7bwp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npwtzq6gi"/><path class="uq5sy7bwp"/>`,
		"fallback": "energy-icons:oven-20-bold",
	});
}

export default Component;
