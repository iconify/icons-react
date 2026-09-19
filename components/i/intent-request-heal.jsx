import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znaj4nbie.css';
import '../../css/u/uc_6-wbbz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znaj4nbie"/><path class="uc_6-wbbz"/>`,
		"fallback": "carbon:intent-request-heal",
	});
}

export default Component;
