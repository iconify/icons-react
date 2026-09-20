import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmyh23gtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmyh23gtc"/>`,
		"fallback": "ri:money-cny-box-fill",
	});
}

export default Component;
