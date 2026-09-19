import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdui4bc2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdui4bc2o"/>`,
		"fallback": "game-icons:organigram",
	});
}

export default Component;
