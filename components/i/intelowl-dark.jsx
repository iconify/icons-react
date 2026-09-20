import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe7x_gb7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe7x_gb7v"/>`,
		"fallback": "selfhst:intelowl-dark",
	});
}

export default Component;
