import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb9h83bkl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb9h83bkl"/>`,
		"fallback": "game-icons:stalagtite",
	});
}

export default Component;
