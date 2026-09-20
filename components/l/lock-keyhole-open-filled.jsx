import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2v1743-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2v1743-b"/>`,
		"fallback": "reicon:lock-keyhole-open-filled",
	});
}

export default Component;
