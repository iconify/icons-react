import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtkzutbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtkzutbpr"/>`,
		"fallback": "heroicons-outline:question-mark-circle",
	});
}

export default Component;
