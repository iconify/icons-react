import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oga4-ybii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oga4-ybii"/>`,
		"fallback": "selfhst:replane-light",
	});
}

export default Component;
