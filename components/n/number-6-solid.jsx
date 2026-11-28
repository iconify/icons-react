import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn0n3pbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn0n3pbzv"/>`,
		"fallback": "iconaut:number-6-solid",
	});
}

export default Component;
