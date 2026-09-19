import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sibcf0bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sibcf0bhs"/>`,
		"fallback": "eos-icons:pull-request",
	});
}

export default Component;
