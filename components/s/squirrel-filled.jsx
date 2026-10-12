import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw1k1qbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xw1k1qbhf"/>`,
		"fallback": "lucide-extended:squirrel-filled",
	});
}

export default Component;
