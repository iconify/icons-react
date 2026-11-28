import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te6x4btrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te6x4btrv"/>`,
		"fallback": "iconaut:shuffle-solid",
	});
}

export default Component;
