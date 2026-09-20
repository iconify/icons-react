import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbf1ts0hu.css';
import '../../css/f/fcgr3_agr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rbf1ts0hu"/><path clip-rule="evenodd" class="fcgr3_agr"/>`,
		"fallback": "qlementine-icons:money-16",
	});
}

export default Component;
