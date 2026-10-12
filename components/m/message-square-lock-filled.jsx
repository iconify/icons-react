import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq20y-biq.css';
import '../../css/y/yv4alofav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq20y-biq"/><path clip-rule="evenodd" class="yv4alofav"/>`,
		"fallback": "lucide-extended:message-square-lock-filled",
	});
}

export default Component;
