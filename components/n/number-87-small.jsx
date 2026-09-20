import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa8-6wb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa8-6wb3b"/>`,
		"fallback": "tabler:number-87-small",
	});
}

export default Component;
