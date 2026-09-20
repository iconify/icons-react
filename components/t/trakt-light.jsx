import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no2_z4syg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no2_z4syg"/>`,
		"fallback": "selfhst:trakt-light",
	});
}

export default Component;
