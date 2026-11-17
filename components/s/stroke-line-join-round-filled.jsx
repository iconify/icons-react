import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srv_qk7md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="srv_qk7md"/>`,
		"fallback": "lucide-extended:stroke-line-join-round-filled",
	});
}

export default Component;
