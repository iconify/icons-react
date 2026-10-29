import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b4g-rpboc.css';
import '../../css/w/wm-29zyee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="b4g-rpboc"/><path class="wm-29zyee wm-a"/></g>`,
		"fallback": "withicons:package-open-solid",
	});
}

export default Component;
