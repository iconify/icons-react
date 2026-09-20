import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdryfmbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdryfmbip"/>`,
		"fallback": "mynaui:letter-k-circle-solid",
	});
}

export default Component;
