import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iysnah-wi.css';
import '../../css/u/u3dxucb3r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iysnah-wi"/><path class="u3dxucb3r"/>`,
		"fallback": "energy-icons:set-square-48-bold",
	});
}

export default Component;
