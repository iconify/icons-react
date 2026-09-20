import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyfsfosee.css';
import '../../css/g/giof89hnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyfsfosee"/><path clip-rule="evenodd" class="giof89hnh"/>`,
		"fallback": "stash:social-whatsapp",
	});
}

export default Component;
