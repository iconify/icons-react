import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go_uhwbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go_uhwbvg"/>`,
		"fallback": "healthicons:question-circle-24px",
	});
}

export default Component;
