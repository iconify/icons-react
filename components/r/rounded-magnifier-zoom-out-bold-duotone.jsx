import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9y477w0i.css';
import '../../css/w/wwbiboy9e.css';
import '../../css/b/bykm3gk0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n9y477w0i"/><path class="wwbiboy9e"/><path class="bykm3gk0s"/>`,
		"fallback": "solar:rounded-magnifier-zoom-out-bold-duotone",
	});
}

export default Component;
