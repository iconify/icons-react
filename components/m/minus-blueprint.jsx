import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zyxcjtjat.css';
import '../../css/r/rafbkgb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="zyxcjtjat"/><path class="rafbkgb4p"/></g>`,
		"fallback": "withicons:minus-blueprint",
	});
}

export default Component;
