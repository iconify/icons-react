import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcw4a_b_u.css';
import '../../css/z/zo5mbwbuz.css';
import '../../css/u/ue-hs4bef.css';
import '../../css/r/r1tp4rbih.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zcw4a_b_u"/><path class="zo5mbwbuz"/><path class="ue-hs4bef"/><path class="r1tp4rbih"/></g>`,
		"fallback": "streamline-flex-color:search-category",
	});
}

export default Component;
