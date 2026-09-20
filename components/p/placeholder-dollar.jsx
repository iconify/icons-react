import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbxwgrbol.css';
import '../../css/p/pyk3d0bro.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbxwgrbol"/><path clip-rule="evenodd" class="pyk3d0bro"/>`,
		"fallback": "lineicons:placeholder-dollar",
	});
}

export default Component;
