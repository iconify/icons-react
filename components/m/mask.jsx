import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv9dnbbqq.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv9dnbbqq"/>`,
		"fallback": "fa6-solid:mask",
	});
}

export default Component;
