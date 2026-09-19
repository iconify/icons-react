import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r13jiwb3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r13jiwb3u"/>`,
		"fallback": "icon-park-outline:rollerskates",
	});
}

export default Component;
