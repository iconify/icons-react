import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr9bynb9b.css';
import '../../css/g/gxyna80vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hr9bynb9b"/><path class="gxyna80vx"/>`,
		"fallback": "si:pin-alt-1-fill",
	});
}

export default Component;
