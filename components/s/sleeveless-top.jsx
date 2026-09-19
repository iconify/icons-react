import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1en6vb-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1en6vb-l"/>`,
		"fallback": "game-icons:sleeveless-top",
	});
}

export default Component;
