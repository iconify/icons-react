import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfcc52b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfcc52b_k"/>`,
		"fallback": "thesvg-color:ted",
	});
}

export default Component;
