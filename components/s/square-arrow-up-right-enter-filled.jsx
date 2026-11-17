import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-hof9sdl.css';
import '../../css/r/rp-2d-muk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-hof9sdl"/><path class="rp-2d-muk"/>`,
		"fallback": "lucide-extended:square-arrow-up-right-enter-filled",
	});
}

export default Component;
