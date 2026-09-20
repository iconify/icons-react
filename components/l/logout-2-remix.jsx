import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7zk5xjil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7zk5xjil"/>`,
		"fallback": "streamline-sharp:logout-2-remix",
	});
}

export default Component;
