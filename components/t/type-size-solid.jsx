import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue6f4x97e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue6f4x97e"/>`,
		"fallback": "iconaut:type-size-solid",
	});
}

export default Component;
