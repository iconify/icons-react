import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg8wz0m-g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg8wz0m-g"/>`,
		"fallback": "ooui:logo-wikipedia",
	});
}

export default Component;
