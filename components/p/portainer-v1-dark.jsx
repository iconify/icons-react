import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykk0mwkhw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykk0mwkhw"/>`,
		"fallback": "selfhst:portainer-v1-dark",
	});
}

export default Component;
