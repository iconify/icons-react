import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syfbt_k0c.css';
import '../../css/x/xemxelb-k.css';
import '../../css/i/iqucf9blp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syfbt_k0c"/><path class="xemxelb-k"/><path class="iqucf9blp"/>`,
		"fallback": "lineicons:license",
	});
}

export default Component;
