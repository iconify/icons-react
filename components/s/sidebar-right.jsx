import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nom5e3boz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nom5e3boz"/>`,
		"fallback": "f7:sidebar-right",
	});
}

export default Component;
