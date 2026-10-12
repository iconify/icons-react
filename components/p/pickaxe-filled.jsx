import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6vl68bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y6vl68bbl"/>`,
		"fallback": "lucide-extended:pickaxe-filled",
	});
}

export default Component;
