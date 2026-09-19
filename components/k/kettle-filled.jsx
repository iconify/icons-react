import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p93r2t4tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p93r2t4tr"/>`,
		"fallback": "griddy-icons:kettle-filled",
	});
}

export default Component;
