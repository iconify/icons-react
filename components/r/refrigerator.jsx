import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-l86pv5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-l86pv5t"/>`,
		"fallback": "streamline-plump:refrigerator",
	});
}

export default Component;
