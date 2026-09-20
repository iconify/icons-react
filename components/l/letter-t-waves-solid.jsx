import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqfa2vbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqfa2vbcz"/>`,
		"fallback": "mynaui:letter-t-waves-solid",
	});
}

export default Component;
