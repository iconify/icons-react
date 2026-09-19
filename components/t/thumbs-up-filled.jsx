import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twtng14ab.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twtng14ab"/>`,
		"fallback": "carbon:thumbs-up-filled",
	});
}

export default Component;
