import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa_hafb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qa_hafb0i"/>`,
		"fallback": "streamline-sharp:like-1-solid",
	});
}

export default Component;
