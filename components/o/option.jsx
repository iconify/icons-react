import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0cbgc7ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0cbgc7ef"/>`,
		"fallback": "tabler:option",
	});
}

export default Component;
