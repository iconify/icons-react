import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkrd80bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkrd80bie"/>`,
		"fallback": "thesvg-color:karlsruher-verkehrsverbund",
	});
}

export default Component;
