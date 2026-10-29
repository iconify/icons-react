import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjazxhtlf.css';
import '../../css/i/iposknb4a.css';
import '../../css/j/jup179biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jjazxhtlf"/><path class="iposknb4a wm-a"/><path class="jup179biu wm-s"/></g>`,
		"fallback": "withicons:plum-blossom-solid",
	});
}

export default Component;
