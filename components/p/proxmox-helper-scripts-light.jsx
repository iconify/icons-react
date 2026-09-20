import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnt04t58o.css';
import '../../css/e/e-q1i1bfg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnt04t58o"/><path class="e-q1i1bfg"/>`,
		"fallback": "selfhst:proxmox-helper-scripts-light",
	});
}

export default Component;
