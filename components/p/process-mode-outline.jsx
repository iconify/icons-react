import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pybg2b8cu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pybg2b8cu"/>`,
		"fallback": "lsicon:process-mode-outline",
	});
}

export default Component;
