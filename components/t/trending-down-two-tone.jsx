import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrix8ccrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrix8ccrj"/>`,
		"fallback": "keyline-icons:trending-down-two-tone",
	});
}

export default Component;
