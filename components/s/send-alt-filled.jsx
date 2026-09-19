import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu9u31ebu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu9u31ebu"/>`,
		"fallback": "carbon:send-alt-filled",
	});
}

export default Component;
