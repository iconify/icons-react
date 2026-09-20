import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5nfyo-cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5nfyo-cb"/>`,
		"fallback": "thesvg-color:lutris",
	});
}

export default Component;
