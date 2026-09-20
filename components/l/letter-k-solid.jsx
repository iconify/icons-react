import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn3hk73hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn3hk73hh"/>`,
		"fallback": "mynaui:letter-k-solid",
	});
}

export default Component;
