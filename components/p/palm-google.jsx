import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve369n4ju.css';
import '../../css/d/d2wy5eb5e.css';
import '../../css/h/hj0knpbrn.css';
import '../../css/d/dxws9lb6d.css';
import '../../css/g/g565v1buv.css';
import '../../css/o/orpqezbqt.css';
import '../../css/v/vxzxcv0wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve369n4ju"/><path class="d2wy5eb5e"/><path class="hj0knpbrn"/><path class="dxws9lb6d"/><path class="g565v1buv"/><path class="orpqezbqt"/><path class="vxzxcv0wk"/>`,
		"fallback": "thesvg-color:palm-google",
	});
}

export default Component;
