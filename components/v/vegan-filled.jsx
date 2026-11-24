import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejb-d7dxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ejb-d7dxo"/>`,
		"fallback": "lucide-extended:vegan-filled",
	});
}

export default Component;
