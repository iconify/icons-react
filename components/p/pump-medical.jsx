import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuaqtw_ay.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuaqtw_ay"/>`,
		"fallback": "fa-solid:pump-medical",
	});
}

export default Component;
