import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xibju_bku.css';
import '../../css/j/jstpxmb3e.css';
import '../../css/p/pkujej5gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xibju_bku"/><path class="jstpxmb3e"/><path clip-rule="evenodd" class="pkujej5gx"/>`,
		"fallback": "solar:turntable-bold",
	});
}

export default Component;
