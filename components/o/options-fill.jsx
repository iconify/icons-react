import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtw5inagp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtw5inagp"/>`,
		"fallback": "eva:options-fill",
	});
}

export default Component;
