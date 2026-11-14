import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsuy9zbyo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsuy9zbyo"/>`,
		"fallback": "devicon-plain:keycloak-wordmark",
	});
}

export default Component;
