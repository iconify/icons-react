import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jero67bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jero67bqq"/>`,
		"fallback": "mynaui:letter-a",
	});
}

export default Component;
