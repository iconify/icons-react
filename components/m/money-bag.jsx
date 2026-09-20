import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/z/zl2ejwbdt.css';
import '../../css/b/blgbl6bop.css';
import '../../css/g/gw0qu2xxt.css';
import '../../css/d/daeoysbig.css';
import '../../css/a/ag_lcee1t.css';
import '../../css/l/llu_210wx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="zl2ejwbdt"/><path class="blgbl6bop"/></g><path class="gw0qu2xxt"/><path class="daeoysbig"/><path class="ag_lcee1t"/><path class="llu_210wx"/>`,
		"fallback": "openmoji:money-bag",
	});
}

export default Component;
