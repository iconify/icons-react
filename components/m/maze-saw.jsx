import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqteblb3a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqteblb3a"/>`,
		"fallback": "game-icons:maze-saw",
	});
}

export default Component;
