import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylo21vb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylo21vb1d"/>`,
		"fallback": "lucide-extended:salad-filled",
	});
}

export default Component;
