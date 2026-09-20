import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxeiy3-qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxeiy3-qn"/>`,
		"fallback": "mynaui:letter-w-octagon-solid",
	});
}

export default Component;
