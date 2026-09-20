import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0_z0tvmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0_z0tvmz"/>`,
		"fallback": "vadivam:thumbs-up",
	});
}

export default Component;
