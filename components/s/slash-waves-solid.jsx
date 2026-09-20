import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmk8c0bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmk8c0bnw"/>`,
		"fallback": "mynaui:slash-waves-solid",
	});
}

export default Component;
