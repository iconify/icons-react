import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmtr6bb9i.css';
import '../../css/c/cxqwkvj3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmtr6bb9i"/><path class="cxqwkvj3i"/>`,
		"fallback": "energy-icons:sparkline-48-bold",
	});
}

export default Component;
