import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfxxj0z4k.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfxxj0z4k"/>`,
		"fallback": "fa-solid:share-square",
	});
}

export default Component;
