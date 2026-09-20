import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj1gwlbyx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj1gwlbyx"/>`,
		"fallback": "selfhst:nextcloud-office-presentation-light",
	});
}

export default Component;
