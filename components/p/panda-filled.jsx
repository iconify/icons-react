import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbw_iwb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vbw_iwb8o"/>`,
		"fallback": "lucide-extended:panda-filled",
	});
}

export default Component;
