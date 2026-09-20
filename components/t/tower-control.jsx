import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejhcw39mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejhcw39mb"/>`,
		"fallback": "lucide:tower-control",
	});
}

export default Component;
