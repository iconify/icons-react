import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptx1sh0xb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptx1sh0xb"/>`,
		"fallback": "selfhst:nextcloud-calendar-dark",
	});
}

export default Component;
