import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht4ivw9gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht4ivw9gu"/>`,
		"fallback": "ri:settings-fill",
	});
}

export default Component;
