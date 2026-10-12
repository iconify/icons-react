import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_vsq7l3i.css';
import '../../css/w/w5fdibb6b.css';
import '../../css/p/ps5c3qbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_vsq7l3i"/><path clip-rule="evenodd" class="w5fdibb6b"/><path class="ps5c3qbsl"/>`,
		"fallback": "lucide-extended:map-pin-minus-filled",
	});
}

export default Component;
