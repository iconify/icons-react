import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wta7eoblc.css';
import '../../css/y/ywgw6ib8n.css';
import '../../css/o/o5mwc3v0t.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wta7eoblc"/><path class="ywgw6ib8n"/><path class="o5mwc3v0t"/>`,
		"fallback": "tabler-flags:switzerland",
	});
}

export default Component;
