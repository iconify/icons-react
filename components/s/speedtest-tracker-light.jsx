import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4ac0ub-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4ac0ub-z"/>`,
		"fallback": "selfhst:speedtest-tracker-light",
	});
}

export default Component;
