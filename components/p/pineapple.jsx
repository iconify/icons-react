import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmih6vbrx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmih6vbrx"/>`,
		"fallback": "dinkie-icons:pineapple",
	});
}

export default Component;
