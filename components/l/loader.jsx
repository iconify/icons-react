import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms5-ntotx.css';
import '../../css/s/s3l-i3nyz.css';
import '../../css/e/evbbf8bxp.css';
import '../../css/w/wplu9ikca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms5-ntotx wm-k"/><path class="s3l-i3nyz wm-a"/><path class="evbbf8bxp wm-a"/><path class="wm-a wplu9ikca"/>`,
		"fallback": "withicons-bauhaus:loader",
	});
}

export default Component;
