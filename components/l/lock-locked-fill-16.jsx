import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blynalbvu.css';
import '../../css/n/n0vzj_b5e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="blynalbvu"/><path class="n0vzj_b5e"/>`,
		"fallback": "garden:lock-locked-fill-16",
	});
}

export default Component;
