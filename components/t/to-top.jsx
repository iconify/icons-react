import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in5ftwbnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in5ftwbnk"/>`,
		"fallback": "icon-park-outline:to-top",
	});
}

export default Component;
