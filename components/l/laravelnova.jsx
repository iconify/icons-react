import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi5d4zb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi5d4zb9x"/>`,
		"fallback": "simple-icons:laravelnova",
	});
}

export default Component;
