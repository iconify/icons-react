import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjx0sja8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjx0sja8m"/>`,
		"fallback": "ri:speak-fill",
	});
}

export default Component;
