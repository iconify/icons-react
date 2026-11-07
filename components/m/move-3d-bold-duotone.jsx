import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngc43h1qd.css';
import '../../css/r/r4s-9h9pk.css';
import '../../css/a/a0gabhbxn.css';
import '../../css/j/j31v2xbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngc43h1qd"/><path class="r4s-9h9pk"/><path class="a0gabhbxn"/><path class="j31v2xbct"/>`,
		"fallback": "solar:move-3d-bold-duotone",
	});
}

export default Component;
