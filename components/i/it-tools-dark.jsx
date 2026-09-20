import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id60smtsd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id60smtsd"/>`,
		"fallback": "selfhst:it-tools-dark",
	});
}

export default Component;
