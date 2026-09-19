import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxyqtbbak.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxyqtbbak"/>`,
		"fallback": "fa6-solid:square-poll-vertical",
	});
}

export default Component;
