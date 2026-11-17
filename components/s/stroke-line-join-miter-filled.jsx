import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un5g80wwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="un5g80wwp"/>`,
		"fallback": "lucide-extended:stroke-line-join-miter-filled",
	});
}

export default Component;
