import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvt_43blu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvt_43blu"/>`,
		"fallback": "energy-icons:loader-48",
	});
}

export default Component;
