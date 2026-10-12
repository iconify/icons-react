import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du1wh4bdg.css';
import '../../css/s/s26wu4bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du1wh4bdg"/><path class="s26wu4bzo"/>`,
		"fallback": "lucide-extended:user-round-arrow-left-filled",
	});
}

export default Component;
