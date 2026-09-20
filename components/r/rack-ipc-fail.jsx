import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_beh8btb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w_beh8btb"/>`,
		"fallback": "ix:rack-ipc-fail",
	});
}

export default Component;
