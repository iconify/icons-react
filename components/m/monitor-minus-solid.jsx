import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecsf4pbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecsf4pbrr"/>`,
		"fallback": "iconaut:monitor-minus-solid",
	});
}

export default Component;
