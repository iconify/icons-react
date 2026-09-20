import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjkg1xcso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjkg1xcso"/>`,
		"fallback": "selfhst:planning-center-services-dark",
	});
}

export default Component;
