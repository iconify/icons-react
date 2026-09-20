import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bivlboz0v.css';
import '../../css/b/bmnyigpxp.css';
import '../../css/f/fml_j_bwp.css';
import '../../css/k/k4s0kzbio.css';

const viewBox = {"width":75.32,"height":92.604};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path paint-order="markers fill stroke" class="bivlboz0v"/><path paint-order="markers fill stroke" class="bmnyigpxp"/><path class="fml_j_bwp"/><path class="k4s0kzbio"/>`,
		"fallback": "thesvg-color:pdf",
	});
}

export default Component;
