import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-itr9fex.css';
import '../../css/c/ca-_ht2ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z-itr9fex"/><circle class="ca-_ht2ki"/></g>`,
		"fallback": "humbleicons:tags",
	});
}

export default Component;
