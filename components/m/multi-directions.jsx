import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_1agk52v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_1agk52v"/>`,
		"fallback": "game-icons:multi-directions",
	});
}

export default Component;
