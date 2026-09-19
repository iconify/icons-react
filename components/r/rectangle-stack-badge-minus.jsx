import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9rnavb5z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9rnavb5z"/>`,
		"fallback": "f7:rectangle-stack-badge-minus",
	});
}

export default Component;
