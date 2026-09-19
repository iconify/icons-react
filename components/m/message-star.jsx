import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6lfs7i_j.css';
import '../../css/n/n-t7iwbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6lfs7i_j"/><path class="n-t7iwbmf"/>`,
		"fallback": "boxicons:message-star",
	});
}

export default Component;
