import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj4x2qbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj4x2qbig"/>`,
		"fallback": "vadivam:shield-x",
	});
}

export default Component;
