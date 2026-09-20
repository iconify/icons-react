import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4v2btb9e.css';
import '../../css/y/ykliw_bta.css';
import '../../css/o/ozeko6bkf.css';
import '../../css/s/szx5y9bfq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4v2btb9e"/><circle class="ykliw_bta"/><circle class="ozeko6bkf"/><circle class="szx5y9bfq"/>`,
		"fallback": "ooui:palette-ltr",
	});
}

export default Component;
