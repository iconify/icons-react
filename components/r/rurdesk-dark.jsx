import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzxio8blc.css';
import '../../css/t/tsv_okbow.css';
import '../../css/i/ij824bc0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzxio8blc"/><path class="tsv_okbow"/><circle class="ij824bc0n"/>`,
		"fallback": "selfhst:rurdesk-dark",
	});
}

export default Component;
