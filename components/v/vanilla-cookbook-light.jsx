import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu3jh-bgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu3jh-bgo"/>`,
		"fallback": "selfhst:vanilla-cookbook-light",
	});
}

export default Component;
