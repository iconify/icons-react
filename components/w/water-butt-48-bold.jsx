import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyir5yn6t.css';
import '../../css/j/jtw39nbby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyir5yn6t"/><path class="jtw39nbby"/>`,
		"fallback": "energy-icons:water-butt-48-bold",
	});
}

export default Component;
