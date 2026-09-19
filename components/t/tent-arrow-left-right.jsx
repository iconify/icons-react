import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwrwo52mj.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwrwo52mj"/>`,
		"fallback": "fa6-solid:tent-arrow-left-right",
	});
}

export default Component;
