import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7tqw4a7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l7tqw4a7i"/>`,
		"fallback": "reicon:list-up2-filled",
	});
}

export default Component;
