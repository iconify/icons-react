import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo3ie7blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xo3ie7blf"/>`,
		"fallback": "lucide-extended:stroke-line-cap-round-filled",
	});
}

export default Component;
