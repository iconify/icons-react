import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4p9-rqsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4p9-rqsz"/>`,
		"fallback": "lucide:letter-g",
	});
}

export default Component;
