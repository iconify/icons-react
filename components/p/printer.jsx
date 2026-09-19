import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0rm51fwg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0rm51fwg"/>`,
		"fallback": "f7:printer",
	});
}

export default Component;
