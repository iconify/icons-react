import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvz-8k5oh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvz-8k5oh"/>`,
		"fallback": "game-icons:ring",
	});
}

export default Component;
