import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol6f-pyhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol6f-pyhq"/>`,
		"fallback": "game-icons:pretzel",
	});
}

export default Component;
