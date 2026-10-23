import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/d8vkrvboc.css';
import '../../css/g/g62c_b0ym.css';
import '../../css/c/coa5w3v0h.css';
import '../../css/u/uh0qp9b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="d8vkrvboc"/><path class="g62c_b0ym"/><path class="coa5w3v0h"/><path class="uh0qp9b6j"/></g>`,
		"fallback": "matita:qr-code",
	});
}

export default Component;
