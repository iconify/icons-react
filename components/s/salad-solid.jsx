import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh52swhlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh52swhlo"/>`,
		"fallback": "iconaut:salad-solid",
	});
}

export default Component;
