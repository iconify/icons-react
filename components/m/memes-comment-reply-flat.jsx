import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rmltm6ahh.css';
import '../../css/e/eklqon7hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rmltm6ahh"/><path class="eklqon7hn"/></g>`,
		"fallback": "streamline-sharp-color:memes-comment-reply-flat",
	});
}

export default Component;
