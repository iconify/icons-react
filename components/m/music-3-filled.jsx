import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c67r7smis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c67r7smis"/>`,
		"fallback": "lucide-extended:music-3-filled",
	});
}

export default Component;
