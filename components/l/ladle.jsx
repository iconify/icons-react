import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf6b-jb3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf6b-jb3m"/>`,
		"fallback": "game-icons:ladle",
	});
}

export default Component;
