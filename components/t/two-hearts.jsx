import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai0cm1bnr.css';
import '../../css/z/z6ro75yjd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai0cm1bnr"/><path class="z6ro75yjd"/>`,
		"fallback": "openmoji:two-hearts",
	});
}

export default Component;
