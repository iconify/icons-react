import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olwjt6buc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olwjt6buc"/>`,
		"fallback": "token:maps",
	});
}

export default Component;
