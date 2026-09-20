import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knc2cvbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knc2cvbsf"/>`,
		"fallback": "lucide:link-2-off",
	});
}

export default Component;
