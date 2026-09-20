import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg676pb3g.css';
import '../../css/t/tsv_okbow.css';
import '../../css/s/sclwzib1q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg676pb3g"/><path class="tsv_okbow"/><circle class="sclwzib1q"/>`,
		"fallback": "selfhst:rurdesk-dark",
	});
}

export default Component;
