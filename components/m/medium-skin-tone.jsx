import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m93qdybrp.css';
import '../../css/y/yu8tkqs3l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m93qdybrp"/><path class="yu8tkqs3l"/>`,
		"fallback": "openmoji:medium-skin-tone",
	});
}

export default Component;
