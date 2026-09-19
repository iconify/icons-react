import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blhdngppl.css';
import '../../css/c/cnc6799tr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blhdngppl"/><path class="cnc6799tr"/>`,
		"fallback": "ion:ios-document",
	});
}

export default Component;
