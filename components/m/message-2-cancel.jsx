import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnx0k3uqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnx0k3uqm"/>`,
		"fallback": "tabler:message-2-cancel",
	});
}

export default Component;
