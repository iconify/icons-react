import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf8p8nt7k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf8p8nt7k"/>`,
		"fallback": "radix-icons:view-vertical",
	});
}

export default Component;
