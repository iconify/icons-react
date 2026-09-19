import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky_ty42kg.css';

const viewBox = {"width":22,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky_ty42kg"/>`,
		"fallback": "icomoon-free:menu2",
	});
}

export default Component;
