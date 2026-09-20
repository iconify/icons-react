import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osqz-p07j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osqz-p07j"/>`,
		"fallback": "oui:menu-left",
	});
}

export default Component;
