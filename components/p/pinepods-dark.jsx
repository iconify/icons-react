import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhgko-bpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhgko-bpc"/>`,
		"fallback": "selfhst:pinepods-dark",
	});
}

export default Component;
