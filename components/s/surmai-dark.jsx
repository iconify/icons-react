import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owv36ushu.css';
import '../../css/a/a0a2rfb-c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owv36ushu"/><path class="a0a2rfb-c"/>`,
		"fallback": "selfhst:surmai-dark",
	});
}

export default Component;
