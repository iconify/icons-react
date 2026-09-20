import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmyyg0bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmyyg0bwj"/>`,
		"fallback": "thesvg-color:roboflow",
	});
}

export default Component;
