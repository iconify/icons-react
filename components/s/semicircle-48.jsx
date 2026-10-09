import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwets-bpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwets-bpu"/>`,
		"fallback": "energy-icons:semicircle-48",
	});
}

export default Component;
