import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcnqqqv9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcnqqqv9i"/>`,
		"fallback": "withicons:water-balloon-solid",
	});
}

export default Component;
