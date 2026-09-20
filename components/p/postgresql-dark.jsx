import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7lad7bll.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7lad7bll"/>`,
		"fallback": "selfhst:postgresql-dark",
	});
}

export default Component;
