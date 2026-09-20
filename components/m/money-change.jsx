import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/cgr1x68jz.css';
import '../../css/t/thwmd5b0c.css';
import '../../css/k/kh50enb1g.css';
import '../../css/e/ekm4kebms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="cgr1x68jz"/><path class="thwmd5b0c"/><path class="kh50enb1g"/><path class="ekm4kebms"/></g>`,
		"fallback": "reicon:money-change",
	});
}

export default Component;
