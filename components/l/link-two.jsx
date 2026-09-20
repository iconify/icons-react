import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep5a_vvsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep5a_vvsv"/>`,
		"fallback": "mynaui:link-two",
	});
}

export default Component;
