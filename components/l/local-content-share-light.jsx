import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l37szz5mg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l37szz5mg"/>`,
		"fallback": "selfhst:local-content-share-light",
	});
}

export default Component;
