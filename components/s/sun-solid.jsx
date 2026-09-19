import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4qi6ywjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4qi6ywjf"/>`,
		"fallback": "heroicons:sun-solid",
	});
}

export default Component;
