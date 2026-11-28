import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te3bg7bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te3bg7bvp"/>`,
		"fallback": "iconaut:pentagon-solid",
	});
}

export default Component;
