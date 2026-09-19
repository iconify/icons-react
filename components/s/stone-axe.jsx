import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz606i7re.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz606i7re"/>`,
		"fallback": "game-icons:stone-axe",
	});
}

export default Component;
