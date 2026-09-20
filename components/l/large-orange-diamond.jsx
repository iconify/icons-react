import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blbxstv4s.css';
import '../../css/y/y-zi9_bzo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blbxstv4s"/><path class="y-zi9_bzo"/>`,
		"fallback": "openmoji:large-orange-diamond",
	});
}

export default Component;
