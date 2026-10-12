import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcnrz_gkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcnrz_gkv"/>`,
		"fallback": "lucide-extended:shield-off-filled",
	});
}

export default Component;
