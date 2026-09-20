import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh9q3eeas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh9q3eeas"/>`,
		"fallback": "ri:thumb-up-line",
	});
}

export default Component;
