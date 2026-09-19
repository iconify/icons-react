import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_4pe5bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d_4pe5bal"/>`,
		"fallback": "basil:telegram-solid",
	});
}

export default Component;
