import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbd42ygua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbd42ygua"/>`,
		"fallback": "streamline-plump-color:tiktok-flat",
	});
}

export default Component;
