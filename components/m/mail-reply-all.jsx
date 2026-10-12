import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjn_unj-b.css';
import '../../css/r/rtpfhie7a.css';
import '../../css/o/o11f91szp.css';
import '../../css/l/lc9k9qb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjn_unj-b"/><path class="rtpfhie7a"/><path class="o11f91szp"/><path class="lc9k9qb3h"/></g>`,
		"fallback": "andrsrxn:mail-reply-all",
	});
}

export default Component;
