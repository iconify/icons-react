import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy9798bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy9798bdy"/>`,
		"fallback": "mynaui:play-diamond-solid",
	});
}

export default Component;
