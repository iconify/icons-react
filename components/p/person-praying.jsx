import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty_o-lgmd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty_o-lgmd"/>`,
		"fallback": "fa6-solid:person-praying",
	});
}

export default Component;
