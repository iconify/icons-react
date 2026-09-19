import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yldqz4f1g.css';
import '../../css/t/t-ubm2b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yldqz4f1g"/><path class="t-ubm2b9z"/>`,
		"fallback": "cbi:pocketcasts-alt",
	});
}

export default Component;
