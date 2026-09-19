import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwwuyc43w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwwuyc43w"/>`,
		"fallback": "iconoir:view-grid",
	});
}

export default Component;
