import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e5qwh6ble.css';
import '../../css/v/vyut8oaub.css';
import '../../css/p/pkb4u5hql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e5qwh6ble wm-shadow"/><path class="vyut8oaub wm-shadow"/><path class="pkb4u5hql"/></g>`,
		"fallback": "withicons-brutal:subscript",
	});
}

export default Component;
