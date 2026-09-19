import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioyychypw.css';
import '../../css/a/ahrqr1byw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioyychypw"/><path class="ahrqr1byw"/>`,
		"fallback": "ion:ios-chatbubbles",
	});
}

export default Component;
