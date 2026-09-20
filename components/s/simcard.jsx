import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjhr_i_rr.css';
import '../../css/g/gha7hr06n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sjhr_i_rr"/><path class="gha7hr06n"/></g>`,
		"fallback": "reicon:simcard",
	});
}

export default Component;
