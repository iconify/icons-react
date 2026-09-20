import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hos5qbbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hos5qbbve"/>`,
		"fallback": "tabler:lock-filled",
	});
}

export default Component;
