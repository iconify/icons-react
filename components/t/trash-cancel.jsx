import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi1tfvbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xi1tfvbwd"/>`,
		"fallback": "griddy-icons:trash-cancel",
	});
}

export default Component;
