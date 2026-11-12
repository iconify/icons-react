import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa4mtmvgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa4mtmvgo"/>`,
		"fallback": "selfhst:owncast-light",
	});
}

export default Component;
