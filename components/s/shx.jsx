import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp1y_acrv.css';
import '../../css/x/xm9k567sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp1y_acrv"/><path class="xm9k567sy"/>`,
		"fallback": "token:shx",
	});
}

export default Component;
