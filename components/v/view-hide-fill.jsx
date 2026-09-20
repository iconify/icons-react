import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0iexbc3j.css';
import '../../css/b/b2jj2nm-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g0iexbc3j"/><path class="b2jj2nm-i"/></g>`,
		"fallback": "lets-icons:view-hide-fill",
	});
}

export default Component;
