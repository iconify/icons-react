import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy0x1-bzd.css';
import '../../css/z/z_t71ccqt.css';
import '../../css/g/glonku3gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy0x1-bzd"/><path clip-rule="evenodd" class="z_t71ccqt"/><path class="glonku3gd"/>`,
		"fallback": "lucide-extended:view-filled",
	});
}

export default Component;
