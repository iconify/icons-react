import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lba1z4b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lba1z4b7s"/>`,
		"fallback": "lucide-extended:video-off-filled",
	});
}

export default Component;
