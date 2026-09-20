import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uabkx0cyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uabkx0cyj"/>`,
		"fallback": "thesvg-color:semantic-release",
	});
}

export default Component;
