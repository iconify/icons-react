import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cty24_dra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cty24_dra"/>`,
		"fallback": "fe:text-size",
	});
}

export default Component;
