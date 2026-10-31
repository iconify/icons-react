import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga99nhblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga99nhblr"/>`,
		"fallback": "coolicons:rows-bulk-round",
	});
}

export default Component;
