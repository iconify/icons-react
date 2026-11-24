import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wssuxnb5s.css';
import '../../css/h/h4-_8v1va.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wssuxnb5s"/><path clip-rule="evenodd" class="h4-_8v1va"/>`,
		"fallback": "lucide-extended:monitor-cog-filled",
	});
}

export default Component;
