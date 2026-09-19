import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8z7ab9xl.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8z7ab9xl"/>`,
		"fallback": "ps:metacafe",
	});
}

export default Component;
