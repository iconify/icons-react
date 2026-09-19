import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b85sq_bgw.css';
import '../../css/f/fzno83ceb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b85sq_bgw"/><path class="fzno83ceb"/>`,
		"fallback": "ion:md-heart-dislike",
	});
}

export default Component;
