import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chffm619i.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chffm619i"/>`,
		"fallback": "fa-solid:trailer",
	});
}

export default Component;
