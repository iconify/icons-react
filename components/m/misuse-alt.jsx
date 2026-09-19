import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd42r404p.css';
import '../../css/k/kigsbgfya.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd42r404p"/><path class="kigsbgfya"/>`,
		"fallback": "carbon:misuse-alt",
	});
}

export default Component;
