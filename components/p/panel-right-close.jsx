import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a_50g-srm.css';
import '../../css/l/larv589oa.css';
import '../../css/w/wwsorabjx.css';
import '../../css/c/cd5tcvbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a_50g-srm wm-shadow"/><path class="larv589oa wm-shadow"/><path class="wwsorabjx"/><path class="cd5tcvbln"/></g>`,
		"fallback": "withicons-brutal:panel-right-close",
	});
}

export default Component;
