import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac5gbxdnl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac5gbxdnl"/>`,
		"fallback": "streamline-plump:text-image-center-large",
	});
}

export default Component;
