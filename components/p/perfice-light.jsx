import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvu2p6bej.css';
import '../../css/v/v_h7thdam.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvu2p6bej"/><path class="v_h7thdam"/>`,
		"fallback": "selfhst:perfice-light",
	});
}

export default Component;
