import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr61sd6wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr61sd6wt"/>`,
		"fallback": "thesvg-color:intel",
	});
}

export default Component;
