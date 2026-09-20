import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mawmz3o9s.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mawmz3o9s"/>`,
		"fallback": "picon:localisation",
	});
}

export default Component;
