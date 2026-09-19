import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho1q24m-f.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho1q24m-f"/>`,
		"fallback": "fa6-solid:people-carry-box",
	});
}

export default Component;
