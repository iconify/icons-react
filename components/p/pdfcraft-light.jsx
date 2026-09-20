import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czzdkt5_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czzdkt5_a"/>`,
		"fallback": "selfhst:pdfcraft-light",
	});
}

export default Component;
