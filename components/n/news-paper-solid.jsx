import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jms3h7bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jms3h7bvr"/>`,
		"fallback": "streamline-sharp:news-paper-solid",
	});
}

export default Component;
