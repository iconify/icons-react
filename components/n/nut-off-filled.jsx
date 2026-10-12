import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo28_rb7q.css';
import '../../css/a/a67_ne9yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yo28_rb7q"/><path class="a67_ne9yr"/>`,
		"fallback": "lucide-extended:nut-off-filled",
	});
}

export default Component;
