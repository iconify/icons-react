import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2gcvubkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2gcvubkm"/>`,
		"fallback": "lucide-extended:library-big-filled",
	});
}

export default Component;
