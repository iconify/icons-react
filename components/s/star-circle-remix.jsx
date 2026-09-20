import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8z5n0tle.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n8z5n0tle"/>`,
		"fallback": "streamline-plump:star-circle-remix",
	});
}

export default Component;
