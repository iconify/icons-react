import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb687ybzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb687ybzm"/>`,
		"fallback": "bxl:squarespace",
	});
}

export default Component;
