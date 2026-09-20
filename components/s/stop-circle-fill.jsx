import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op3ibab6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="op3ibab6n"/>`,
		"fallback": "si:stop-circle-fill",
	});
}

export default Component;
