import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ork74pgmv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ork74pgmv"/>`,
		"fallback": "game-icons:troglodyte",
	});
}

export default Component;
