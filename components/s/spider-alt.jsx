import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5wgs_bor.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5wgs_bor"/>`,
		"fallback": "game-icons:spider-alt",
	});
}

export default Component;
