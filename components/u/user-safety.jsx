import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umyoaccdm.css';
import '../../css/p/p9y60_4yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="umyoaccdm"/><path class="p9y60_4yb"/></g>`,
		"fallback": "tdesign:user-safety",
	});
}

export default Component;
