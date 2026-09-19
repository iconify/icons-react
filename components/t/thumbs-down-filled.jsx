import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdq557ezd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdq557ezd"/>`,
		"fallback": "carbon:thumbs-down-filled",
	});
}

export default Component;
