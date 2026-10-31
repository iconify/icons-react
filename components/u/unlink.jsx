import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tav986bnk.css';
import '../../css/a/aih2n1bws.css';
import '../../css/f/fffug9o2n.css';
import '../../css/n/n0zn92bws.css';
import '../../css/l/l-ibb1blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tav986bnk wm-shadow"/><path class="aih2n1bws wm-shadow"/><path class="fffug9o2n"/><path class="n0zn92bws"/><path class="l-ibb1blc wm-s"/></g>`,
		"fallback": "withicons-brutal:unlink",
	});
}

export default Component;
