import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyvfaw90f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyvfaw90f"/>`,
		"fallback": "ci:table-remove",
	});
}

export default Component;
