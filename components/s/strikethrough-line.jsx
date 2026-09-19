import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5qi3wivy.css';
import '../../css/d/d0__ef_8v.css';
import '../../css/t/t_uvh3baq.css';
import '../../css/n/nzne_mbqm.css';
import '../../css/z/z5b9z4bkc.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 h5qi3wivy"/><path class="clr-i-outline clr-i-outline-path-2 d0__ef_8v"/><path class="clr-i-outline clr-i-outline-path-3 t_uvh3baq"/><path class="clr-i-outline clr-i-outline-path-4 nzne_mbqm"/><path class="clr-i-outline clr-i-outline-path-5 z5b9z4bkc"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:strikethrough-line",
	});
}

export default Component;
