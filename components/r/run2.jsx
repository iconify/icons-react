import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcknti30u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gcknti30u"/>`,
		"fallback": "reicon:run2",
	});
}

export default Component;
