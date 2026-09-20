import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i__b08bke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i__b08bke"/>`,
		"fallback": "thesvg-color:rasa",
	});
}

export default Component;
