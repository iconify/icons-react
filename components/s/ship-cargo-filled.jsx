import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eagrsqb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eagrsqb9v"/>`,
		"fallback": "lucide-extended:ship-cargo-filled",
	});
}

export default Component;
