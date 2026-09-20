import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah81sc2kd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah81sc2kd"/>`,
		"fallback": "uiw:link",
	});
}

export default Component;
