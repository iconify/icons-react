import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr2ifypni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr2ifypni"/>`,
		"fallback": "lucide-extended:shovel-filled",
	});
}

export default Component;
