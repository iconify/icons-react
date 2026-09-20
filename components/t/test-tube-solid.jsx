import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-8f62uxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-8f62uxh"/>`,
		"fallback": "streamline-plump:test-tube-solid",
	});
}

export default Component;
