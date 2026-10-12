import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uewhq319h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uewhq319h"/>`,
		"fallback": "lucide-extended:medal-filled",
	});
}

export default Component;
