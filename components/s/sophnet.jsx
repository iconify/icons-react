import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d60y3vbff.css';
import '../../css/z/zewb0mbil.css';
import '../../css/h/htlnml_qd.css';
import '../../css/h/h7c6g4lty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d60y3vbff"/><path class="zewb0mbil"/><path class="htlnml_qd"/><path class="h7c6g4lty"/>`,
		"fallback": "thesvg-color:sophnet",
	});
}

export default Component;
