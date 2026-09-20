import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyt432bcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyt432bcy"/>`,
		"fallback": "selfhst:nextcloud-notes-light",
	});
}

export default Component;
