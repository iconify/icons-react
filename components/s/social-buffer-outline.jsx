import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud72a57ps.css';
import '../../css/b/byocr9c0k.css';
import '../../css/v/vj8lj592n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud72a57ps"/><path class="byocr9c0k"/><path class="vj8lj592n"/>`,
		"fallback": "ion:social-buffer-outline",
	});
}

export default Component;
