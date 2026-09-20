import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4p0j-rha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4p0j-rha"/>`,
		"fallback": "selfhst:richy-light",
	});
}

export default Component;
