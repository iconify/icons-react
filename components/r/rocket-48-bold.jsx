import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-7zydo-z.css';
import '../../css/i/ifsbdgx5h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-7zydo-z"/><path class="ifsbdgx5h"/>`,
		"fallback": "energy-icons:rocket-48-bold",
	});
}

export default Component;
