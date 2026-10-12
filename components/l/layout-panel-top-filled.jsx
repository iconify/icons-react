import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c16b3xbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c16b3xbds"/>`,
		"fallback": "lucide-extended:layout-panel-top-filled",
	});
}

export default Component;
