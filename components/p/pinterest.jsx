import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k672c4brm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k672c4brm"/>`,
		"fallback": "icomoon-free:pinterest",
	});
}

export default Component;
