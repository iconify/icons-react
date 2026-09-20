import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwux0zg9y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vwux0zg9y"/>`,
		"fallback": "streamline-plump:search-visual-remix",
	});
}

export default Component;
