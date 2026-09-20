import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t00li932o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t00li932o"/>`,
		"fallback": "mynaui:letter-s-diamond-solid",
	});
}

export default Component;
