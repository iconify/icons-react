import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_tiv4jgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_tiv4jgo"/>`,
		"fallback": "griddy-icons:share-windows",
	});
}

export default Component;
