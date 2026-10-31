import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b2j3gwbef.css';
import '../../css/h/hekjs4bre.css';
import '../../css/y/yooq7cc4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="b2j3gwbef wm-shadow"/><path class="hekjs4bre wm-shadow"/><path class="yooq7cc4a"/></g>`,
		"fallback": "withicons-brutal:table-of-contents",
	});
}

export default Component;
