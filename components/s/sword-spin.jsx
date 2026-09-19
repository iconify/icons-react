import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak5czckoj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak5czckoj"/>`,
		"fallback": "game-icons:sword-spin",
	});
}

export default Component;
