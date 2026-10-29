import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhgf1rbxc.css';
import '../../css/c/c3af0we0f.css';
import '../../css/s/sdpc00hnc.css';
import '../../css/b/bk2l0-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhgf1rbxc wm-k"/><path class="c3af0we0f wm-k"/><path class="sdpc00hnc wm-s"/><path class="bk2l0-b2l wm-s"/>`,
		"fallback": "withicons-bauhaus:phone-call",
	});
}

export default Component;
