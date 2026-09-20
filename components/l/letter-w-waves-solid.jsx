import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avzf75b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avzf75b5x"/>`,
		"fallback": "mynaui:letter-w-waves-solid",
	});
}

export default Component;
