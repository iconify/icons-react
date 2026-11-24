import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3is4ubde.css';
import '../../css/z/z283bdcgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3is4ubde"/><path clip-rule="evenodd" class="z283bdcgy"/>`,
		"fallback": "lucide-extended:tags-filled",
	});
}

export default Component;
