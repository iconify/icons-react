import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqyn1_03m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqyn1_03m"/>`,
		"fallback": "vadivam:user-pen",
	});
}

export default Component;
