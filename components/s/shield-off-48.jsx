import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i85qzcn-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i85qzcn-s"/>`,
		"fallback": "energy-icons:shield-off-48",
	});
}

export default Component;
