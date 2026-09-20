import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn1qe8dtl.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn1qe8dtl"/>`,
		"fallback": "marketeq:minus",
	});
}

export default Component;
