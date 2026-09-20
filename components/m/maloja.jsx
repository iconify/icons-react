import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzvbfpb6b.css';
import '../../css/b/b81wimuvn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzvbfpb6b"/><path class="b81wimuvn"/>`,
		"fallback": "selfhst:maloja",
	});
}

export default Component;
