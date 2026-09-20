import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpyqy236k.css';
import '../../css/f/fv33nkbrq.css';
import '../../css/y/yp1e1u17q.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/r/r9sysz75i.css';
import '../../css/z/zrjvghb_r.css';
import '../../css/a/auj8qbcan.css';
import '../../css/f/f3koplb3g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wpyqy236k"><path class="fv33nkbrq"/><circle class="yp1e1u17q"/></g><g class="brzn_0bpr"><circle class="r9sysz75i"/><path class="zrjvghb_r"/><path class="auj8qbcan"/><path class="f3koplb3g"/></g>`,
		"fallback": "openmoji:person-standing-medium-light-skin-tone",
	});
}

export default Component;
