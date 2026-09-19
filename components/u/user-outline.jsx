import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqo-8vfeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tqo-8vfeh"/>`,
		"fallback": "basil:user-outline",
	});
}

export default Component;
