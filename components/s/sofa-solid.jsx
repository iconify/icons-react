import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzl_o7baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzl_o7baw"/>`,
		"fallback": "mynaui:sofa-solid",
	});
}

export default Component;
