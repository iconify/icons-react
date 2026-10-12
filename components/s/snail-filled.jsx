import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg1p4x-oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fg1p4x-oc"/>`,
		"fallback": "lucide-extended:snail-filled",
	});
}

export default Component;
