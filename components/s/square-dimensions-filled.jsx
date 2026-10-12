import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnk2uvdxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wnk2uvdxf"/>`,
		"fallback": "lucide-extended:square-dimensions-filled",
	});
}

export default Component;
