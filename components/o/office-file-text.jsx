import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gg38cjbtc.css';
import '../../css/e/e_aw4b_ji.css';
import '../../css/b/bmmk3xbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gg38cjbtc"/><path class="e_aw4b_ji"/><path class="bmmk3xbih"/></g>`,
		"fallback": "streamline-freehand:office-file-text",
	});
}

export default Component;
