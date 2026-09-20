import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vwasf1fzc.css';
import '../../css/e/elti8xbhv.css';
import '../../css/x/xizglbc3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="vwasf1fzc"/><circle class="elti8xbhv"/><path class="xizglbc3d"/></g>`,
		"fallback": "lucide:tablets",
	});
}

export default Component;
