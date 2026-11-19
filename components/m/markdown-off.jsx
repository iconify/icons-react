import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av0_gjbxd.css';
import '../../css/i/ixmtg0bqh.css';
import '../../css/a/apufj2p9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="av0_gjbxd"/><path class="ixmtg0bqh"/><path class="apufj2p9b"/></g>`,
		"fallback": "andrsrxn:markdown-off",
	});
}

export default Component;
