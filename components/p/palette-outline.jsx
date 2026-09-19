import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vniww6bxz.css';
import '../../css/q/qtu4m29vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vniww6bxz"/><path clip-rule="evenodd" class="qtu4m29vr"/>`,
		"fallback": "basil:palette-outline",
	});
}

export default Component;
