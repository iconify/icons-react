import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-2ahia8o.css';

const viewBox = {"width":34,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-2ahia8o"/>`,
		"fallback": "et:paperclip",
	});
}

export default Component;
