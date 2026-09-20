import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrm_dri2x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrm_dri2x"/>`,
		"fallback": "system-uicons:table",
	});
}

export default Component;
