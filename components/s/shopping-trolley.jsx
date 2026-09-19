import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwg0nbcog.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwg0nbcog"/>`,
		"fallback": "dinkie-icons:shopping-trolley",
	});
}

export default Component;
