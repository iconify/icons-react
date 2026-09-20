import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea7lc5b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea7lc5b7q"/>`,
		"fallback": "tabler:number-6-small",
	});
}

export default Component;
