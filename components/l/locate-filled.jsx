import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scaub_b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scaub_b3e"/>`,
		"fallback": "lucide-extended:locate-filled",
	});
}

export default Component;
