import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0hu8ieet.css';
import '../../css/e/e5_g43bxn.css';
import '../../css/u/u187tccwh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0hu8ieet"/><path class="e5_g43bxn"/><path class="u187tccwh"/>`,
		"fallback": "openmoji:pot-of-food",
	});
}

export default Component;
