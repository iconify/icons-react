import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4n9_hbzl.css';
import '../../css/d/dy7t98bks.css';
import '../../css/e/e92ev1b5s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4n9_hbzl"/><path class="dy7t98bks"/><path class="e92ev1b5s"/>`,
		"fallback": "carbon:study-unread",
	});
}

export default Component;
