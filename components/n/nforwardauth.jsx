import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs8qhvbzx.css';
import '../../css/m/mueojzrmf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs8qhvbzx"/><path class="mueojzrmf"/>`,
		"fallback": "selfhst:nforwardauth",
	});
}

export default Component;
