import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw6dnvbbs.css';
import '../../css/e/e2qan-08h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw6dnvbbs"/><path class="e2qan-08h"/>`,
		"fallback": "energy-icons:ratchet-20",
	});
}

export default Component;
