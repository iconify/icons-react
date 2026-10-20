import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbb7sw9yi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbb7sw9yi"/>`,
		"fallback": "energy-icons:space-bar-48",
	});
}

export default Component;
