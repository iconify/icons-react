import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmup8pbem.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmup8pbem"/>`,
		"fallback": "fa6-solid:square-person-confined",
	});
}

export default Component;
