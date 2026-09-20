import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc9p_p96d.css';
import '../../css/d/dti_o-b1r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zc9p_p96d"/><path class="dti_o-b1r"/>`,
		"fallback": "qlementine-icons:theme-16",
	});
}

export default Component;
