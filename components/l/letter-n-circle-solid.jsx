import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttqu9ibyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttqu9ibyk"/>`,
		"fallback": "mynaui:letter-n-circle-solid",
	});
}

export default Component;
