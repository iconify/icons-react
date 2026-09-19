import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl-llnhhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl-llnhhj"/>`,
		"fallback": "icons8:rounded-rectangle-filled",
	});
}

export default Component;
