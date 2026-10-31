import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xomdi8b2s.css';
import '../../css/n/nuemgvbfx.css';
import '../../css/c/cc6_nwbfm.css';
import '../../css/d/db4425i8s.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xomdi8b2s"/><path class="nuemgvbfx"/><path class="cc6_nwbfm"/><path class="db4425i8s"/>`,
		"fallback": "tabler-flags:philippines",
	});
}

export default Component;
