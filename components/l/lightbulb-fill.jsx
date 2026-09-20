import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkkus2bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkkus2bqy"/>`,
		"fallback": "keyline-icons:lightbulb-fill",
	});
}

export default Component;
