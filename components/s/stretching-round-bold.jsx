import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay5dbdcag.css';
import '../../css/t/twhnk8blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay5dbdcag"/><path clip-rule="evenodd" class="twhnk8blw"/>`,
		"fallback": "solar:stretching-round-bold",
	});
}

export default Component;
