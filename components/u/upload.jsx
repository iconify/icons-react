import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw4qccbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw4qccbqg"/>`,
		"fallback": "heroicons-outline:upload",
	});
}

export default Component;
