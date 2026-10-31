import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/udt53cbhl.css';
import '../../css/r/rn6bonbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="udt53cbhl wm-k"/><path class="rn6bonbtx wm-a"/></g>`,
		"fallback": "withicons:peacock-feather-gloss",
	});
}

export default Component;
