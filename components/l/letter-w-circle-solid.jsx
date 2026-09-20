import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw7-8ydfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw7-8ydfv"/>`,
		"fallback": "mynaui:letter-w-circle-solid",
	});
}

export default Component;
