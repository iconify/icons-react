import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_0r-v9zw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_0r-v9zw"/>`,
		"fallback": "f7:tornado",
	});
}

export default Component;
