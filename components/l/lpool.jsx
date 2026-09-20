import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj38x5bhy.css';
import '../../css/j/jd18gacdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj38x5bhy"/><path class="jd18gacdn"/>`,
		"fallback": "token:lpool",
	});
}

export default Component;
