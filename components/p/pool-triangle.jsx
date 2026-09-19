import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c680_fk7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c680_fk7j"/>`,
		"fallback": "game-icons:pool-triangle",
	});
}

export default Component;
