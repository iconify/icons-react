import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rasakkbar.css';
import '../../css/k/kthl54b0k.css';
import '../../css/r/r_bgghfih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rasakkbar"/><path class="kthl54b0k"/><path class="r_bgghfih"/>`,
		"fallback": "boxicons:pie-chart-filled",
	});
}

export default Component;
