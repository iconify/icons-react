import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqx-81tcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rqx-81tcj"/>`,
		"fallback": "lucide-extended:radio-receiver-filled",
	});
}

export default Component;
