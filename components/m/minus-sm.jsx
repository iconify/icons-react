import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjqk605uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjqk605uh"/>`,
		"fallback": "heroicons-outline:minus-sm",
	});
}

export default Component;
