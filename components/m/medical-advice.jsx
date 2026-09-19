import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9wid4gvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p9wid4gvi"/>`,
		"fallback": "healthicons:medical-advice",
	});
}

export default Component;
