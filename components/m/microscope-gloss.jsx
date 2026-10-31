import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbgj9ebag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbgj9ebag"/>`,
		"fallback": "withicons:microscope-gloss",
	});
}

export default Component;
