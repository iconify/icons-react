import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm3i78bcl.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm3i78bcl"/><path class="bwibdw4bb"/>`,
		"fallback": "boxicons:meh-blank",
	});
}

export default Component;
