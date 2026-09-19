import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzmmucb0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzmmucb0l"/>`,
		"fallback": "healthicons:intensive-care-unit",
	});
}

export default Component;
