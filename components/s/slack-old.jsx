import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md1t4lm0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md1t4lm0w"/>`,
		"fallback": "bxl:slack-old",
	});
}

export default Component;
