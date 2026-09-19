import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3dpg2-tr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3dpg2-tr"/>`,
		"fallback": "dinkie-icons:smiling-face-with-open-mouth-and-cold-sweat",
	});
}

export default Component;
