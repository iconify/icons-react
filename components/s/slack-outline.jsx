import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6jmz7umj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e6jmz7umj"/>`,
		"fallback": "basil:slack-outline",
	});
}

export default Component;
