import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9u-03p8n.css';
import '../../css/a/ar1d8pb2n.css';
import '../../css/m/muc82xbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9u-03p8n"/><path class="ar1d8pb2n"/><path class="muc82xbjq"/>`,
		"fallback": "solar:panel-left-close-bold-duotone",
	});
}

export default Component;
