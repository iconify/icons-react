import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_vsq7l3i.css';
import '../../css/e/edyk28bgn.css';
import '../../css/i/i09p7lbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_vsq7l3i"/><path clip-rule="evenodd" class="edyk28bgn"/><path class="i09p7lbbh"/>`,
		"fallback": "lucide-extended:map-pin-x-filled",
	});
}

export default Component;
