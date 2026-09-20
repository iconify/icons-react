import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjj53xb_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zjj53xb_e"/>`,
		"fallback": "streamline:log-remix",
	});
}

export default Component;
