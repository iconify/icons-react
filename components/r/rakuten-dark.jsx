import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sydg7eklb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sydg7eklb"/>`,
		"fallback": "selfhst:rakuten-dark",
	});
}

export default Component;
