import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3kj2qixg.css';
import '../../css/w/wygmz5bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3kj2qixg"/><path class="wygmz5bob"/>`,
		"fallback": "lucide-extended:square-arrow-down-right-enter-filled",
	});
}

export default Component;
