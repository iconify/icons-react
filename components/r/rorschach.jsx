import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln5b_cbqu.css';

const viewBox = {"width":1027,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln5b_cbqu"/>`,
		"fallback": "whh:rorschach",
	});
}

export default Component;
