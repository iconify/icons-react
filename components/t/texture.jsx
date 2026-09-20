import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuqz4db-z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuqz4db-z"/>`,
		"fallback": "streamline-flex:texture",
	});
}

export default Component;
