import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jivqpk97o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jivqpk97o"/>`,
		"fallback": "game-icons:magic-broom",
	});
}

export default Component;
