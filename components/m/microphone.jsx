import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_wnb30-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_wnb30-b"/>`,
		"fallback": "meteor-icons:microphone",
	});
}

export default Component;
