import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxevvmbhb.css';
import '../../css/p/p1v655b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxevvmbhb"/><path class="p1v655b3e"/>`,
		"fallback": "streamline-ultimate:sd-card-sync-bold",
	});
}

export default Component;
