import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myk9ll1ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myk9ll1ec"/>`,
		"fallback": "withicons:parking-solid",
	});
}

export default Component;
