import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lij9yb37t.css';
import '../../css/d/dq8mdnoxf.css';
import '../../css/x/xrzk5dbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lij9yb37t"/><path class="dq8mdnoxf"/><path clip-rule="evenodd" class="xrzk5dbef"/>`,
		"fallback": "solar:medal-ribbons-star-bold",
	});
}

export default Component;
