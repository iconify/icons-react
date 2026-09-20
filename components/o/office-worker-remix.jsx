import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3ub07b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h3ub07b7q"/>`,
		"fallback": "streamline-sharp:office-worker-remix",
	});
}

export default Component;
