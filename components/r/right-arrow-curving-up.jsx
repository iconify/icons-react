import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwtxp2blp.css';
import '../../css/k/kkn84ffqg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwtxp2blp"/><path class="kkn84ffqg"/>`,
		"fallback": "openmoji:right-arrow-curving-up",
	});
}

export default Component;
