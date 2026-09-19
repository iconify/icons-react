import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah_u9vljd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah_u9vljd"/>`,
		"fallback": "bxs:message-alt-detail",
	});
}

export default Component;
