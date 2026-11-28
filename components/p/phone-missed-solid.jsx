import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubg3ixvlh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubg3ixvlh"/>`,
		"fallback": "iconaut:phone-missed-solid",
	});
}

export default Component;
