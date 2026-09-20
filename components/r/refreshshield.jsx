import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axsftvk0n.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axsftvk0n"/>`,
		"fallback": "wpf:refreshshield",
	});
}

export default Component;
