import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7b54abma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7b54abma"/>`,
		"fallback": "withicons:subscript-solid",
	});
}

export default Component;
