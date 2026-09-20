import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiffnub_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiffnub_g"/>`,
		"fallback": "vadivam:volume-x",
	});
}

export default Component;
