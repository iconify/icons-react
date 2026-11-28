import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odnq2rblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odnq2rblr"/>`,
		"fallback": "noviair-light:kettle-clock",
	});
}

export default Component;
