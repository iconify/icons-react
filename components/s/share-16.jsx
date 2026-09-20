import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc4-bsb_o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tc4-bsb_o"/>`,
		"fallback": "qlementine-icons:share-16",
	});
}

export default Component;
