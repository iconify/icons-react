import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzov_nwrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzov_nwrv"/>`,
		"fallback": "coolicons:tree-pine-round",
	});
}

export default Component;
