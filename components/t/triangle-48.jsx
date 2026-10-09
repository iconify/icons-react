import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn67wgblz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn67wgblz"/>`,
		"fallback": "energy-icons:triangle-48",
	});
}

export default Component;
