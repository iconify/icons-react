import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvn7xob8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvn7xob8c"/>`,
		"fallback": "selfhst:portainer-light",
	});
}

export default Component;
