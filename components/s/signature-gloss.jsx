import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/ve6s1acld.css';
import '../../css/m/md5on86yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ve6s1acld wm-k"/><path class="md5on86yt wm-a"/></g>`,
		"fallback": "withicons:signature-gloss",
	});
}

export default Component;
