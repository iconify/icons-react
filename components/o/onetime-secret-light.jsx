import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w077uwbbu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w077uwbbu"/>`,
		"fallback": "selfhst:onetime-secret-light",
	});
}

export default Component;
