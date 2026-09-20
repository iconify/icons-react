import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-kth2bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-kth2bfu"/>`,
		"fallback": "mynaui:skip-forward-solid",
	});
}

export default Component;
