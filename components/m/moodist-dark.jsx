import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpe0arbbk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpe0arbbk"/>`,
		"fallback": "selfhst:moodist-dark",
	});
}

export default Component;
