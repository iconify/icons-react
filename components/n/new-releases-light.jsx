import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek7bct7me.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek7bct7me"/>`,
		"fallback": "selfhst:new-releases-light",
	});
}

export default Component;
