import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olo123k4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olo123k4s"/>`,
		"fallback": "selfhst:paperclip-ai-dark",
	});
}

export default Component;
