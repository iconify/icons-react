import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na0niibsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na0niibsw"/>`,
		"fallback": "game-icons:nailed-head",
	});
}

export default Component;
