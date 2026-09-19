import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz5lj8u_t.css';
import '../../css/r/rigcembux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz5lj8u_t"/><path class="rigcembux"/>`,
		"fallback": "ion:ios-hammer",
	});
}

export default Component;
