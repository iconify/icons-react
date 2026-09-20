import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0a-z351k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0a-z351k"/>`,
		"fallback": "selfhst:keycloak-light",
	});
}

export default Component;
