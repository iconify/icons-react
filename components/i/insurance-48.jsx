import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa1rnmbzm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa1rnmbzm"/>`,
		"fallback": "energy-icons:insurance-48",
	});
}

export default Component;
