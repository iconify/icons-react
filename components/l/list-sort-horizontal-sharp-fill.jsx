import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvg0gs5tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvg0gs5tx"/>`,
		"fallback": "keyline-icons:list-sort-horizontal-sharp-fill",
	});
}

export default Component;
