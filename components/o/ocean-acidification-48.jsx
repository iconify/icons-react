import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh24gkqan.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh24gkqan"/>`,
		"fallback": "energy-icons:ocean-acidification-48",
	});
}

export default Component;
