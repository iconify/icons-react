import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuyb_7bma.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuyb_7bma"/>`,
		"fallback": "dinkie-icons:sauropod",
	});
}

export default Component;
