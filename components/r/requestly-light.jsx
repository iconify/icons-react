import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppee3vb_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppee3vb_v"/>`,
		"fallback": "selfhst:requestly-light",
	});
}

export default Component;
