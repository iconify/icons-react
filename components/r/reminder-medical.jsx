import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0oe49b3b.css';
import '../../css/p/p4r4-2bra.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0oe49b3b"/><path class="p4r4-2bra"/>`,
		"fallback": "carbon:reminder-medical",
	});
}

export default Component;
