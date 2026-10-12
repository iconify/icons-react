import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi8i8d0dt.css';
import '../../css/m/mgrdfsbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi8i8d0dt"/><path clip-rule="evenodd" class="mgrdfsbgl"/>`,
		"fallback": "lucide-extended:user-round-key-filled",
	});
}

export default Component;
