import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr_n6nb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr_n6nb5i"/>`,
		"fallback": "lucide-extended:paintbrush-vertical-filled",
	});
}

export default Component;
