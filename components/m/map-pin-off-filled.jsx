import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbehvzotf.css';
import '../../css/w/w-2f6ab8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zbehvzotf"/><path class="w-2f6ab8d"/>`,
		"fallback": "lucide-extended:map-pin-off-filled",
	});
}

export default Component;
