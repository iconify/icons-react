import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l3q4wd40i.css';
import '../../css/z/zjpkobcnb.css';
import '../../css/t/tw6lfcb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l3q4wd40i"/><path class="zjpkobcnb"/><path class="tw6lfcb_x"/></g>`,
		"fallback": "streamline-freehand:job-profile-search",
	});
}

export default Component;
