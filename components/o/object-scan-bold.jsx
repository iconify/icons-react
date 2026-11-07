import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ichbppyyq.css';
import '../../css/a/a2zaddc-d.css';
import '../../css/k/k9s0iqbql.css';
import '../../css/u/ubjcwbpjm.css';
import '../../css/x/xefyw8bax.css';
import '../../css/z/zb3wdhbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ichbppyyq"/><path class="a2zaddc-d"/><path class="k9s0iqbql"/><path class="ubjcwbpjm"/><path class="xefyw8bax"/><path class="zb3wdhbmn"/>`,
		"fallback": "solar:object-scan-bold",
	});
}

export default Component;
