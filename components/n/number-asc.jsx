import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfasuabrl.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfasuabrl"/>`,
		"fallback": "iwwa:number-asc",
	});
}

export default Component;
