import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp-9p8b5i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp-9p8b5i"/>`,
		"fallback": "cib:todoist",
	});
}

export default Component;
