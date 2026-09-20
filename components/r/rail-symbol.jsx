import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn4z48ype.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn4z48ype"/>`,
		"fallback": "mynaui:rail-symbol",
	});
}

export default Component;
