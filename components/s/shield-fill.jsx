import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwuu_8brv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwuu_8brv"/>`,
		"fallback": "bi:shield-fill",
	});
}

export default Component;
