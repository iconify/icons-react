import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay5dbdcag.css';
import '../../css/z/zgx4xq5qt.css';
import '../../css/m/mqbp11bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay5dbdcag"/><path clip-rule="evenodd" class="zgx4xq5qt"/><path class="mqbp11bux"/>`,
		"fallback": "solar:stretching-bold-duotone",
	});
}

export default Component;
