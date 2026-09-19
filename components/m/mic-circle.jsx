import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4ww0ra-t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4ww0ra-t"/>`,
		"fallback": "f7:mic-circle",
	});
}

export default Component;
