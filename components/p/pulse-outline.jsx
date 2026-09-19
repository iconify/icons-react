import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbycz7_ya.css';
import '../../css/h/hueeqab-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbycz7_ya"/><circle class="hueeqab-f"/>`,
		"fallback": "famicons:pulse-outline",
	});
}

export default Component;
