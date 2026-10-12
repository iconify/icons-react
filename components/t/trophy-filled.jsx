import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go13jz64q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="go13jz64q"/>`,
		"fallback": "lucide-extended:trophy-filled",
	});
}

export default Component;
