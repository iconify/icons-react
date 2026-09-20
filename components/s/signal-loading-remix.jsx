import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ummv7obra.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ummv7obra"/>`,
		"fallback": "streamline:signal-loading-remix",
	});
}

export default Component;
