import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy-_l3b8b.css';
import '../../css/c/cy63lm71v.css';
import '../../css/h/h5dyhebiq.css';
import '../../css/d/dw16tac2m.css';
import '../../css/y/ypbt8hbai.css';
import '../../css/h/hw37-wp4l.css';
import '../../css/q/qfpjec8le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oy-_l3b8b"/><path class="cy63lm71v"/><path class="h5dyhebiq"/><path class="dw16tac2m"/><path class="ypbt8hbai"/><path class="hw37-wp4l"/><path class="qfpjec8le"/>`,
		"fallback": "token:npm",
	});
}

export default Component;
