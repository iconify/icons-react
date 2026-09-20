import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7-09xb5s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7-09xb5s"/>`,
		"fallback": "streamline-plump:invisible-2",
	});
}

export default Component;
