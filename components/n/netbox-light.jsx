import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gipm5jb6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gipm5jb6w"/>`,
		"fallback": "selfhst:netbox-light",
	});
}

export default Component;
