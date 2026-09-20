import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uafs1acwa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uafs1acwa"/>`,
		"fallback": "selfhst:passbolt-light",
	});
}

export default Component;
