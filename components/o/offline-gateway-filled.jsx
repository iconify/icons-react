import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exdltnb9b.css';
import '../../css/r/rg-moybam.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exdltnb9b"/><path class="rg-moybam"/>`,
		"fallback": "lsicon:offline-gateway-filled",
	});
}

export default Component;
