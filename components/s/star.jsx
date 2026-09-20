import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w485043ft.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w485043ft"/>`,
		"fallback": "iwwa:star",
	});
}

export default Component;
