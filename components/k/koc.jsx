import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr0-kzblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr0-kzblf"/>`,
		"fallback": "simple-icons:koc",
	});
}

export default Component;
