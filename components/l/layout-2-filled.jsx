import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzql8ab7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzql8ab7n"/>`,
		"fallback": "tabler:layout-2-filled",
	});
}

export default Component;
