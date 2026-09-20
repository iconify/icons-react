import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1x776i8b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1x776i8b"/>`,
		"fallback": "selfhst:local-content-share-dark",
	});
}

export default Component;
