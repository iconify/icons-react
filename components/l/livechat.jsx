import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1g968bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1g968bjy"/>`,
		"fallback": "thesvg-color:livechat",
	});
}

export default Component;
