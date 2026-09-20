import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh-wf7b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh-wf7b8b"/>`,
		"fallback": "simple-icons:styleshare",
	});
}

export default Component;
