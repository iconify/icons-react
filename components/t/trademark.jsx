import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-a_ppb5a.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-a_ppb5a"/>`,
		"fallback": "fa-solid:trademark",
	});
}

export default Component;
