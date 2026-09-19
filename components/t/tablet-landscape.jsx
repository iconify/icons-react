import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q367x2bks.css';
import '../../css/a/ae_9512ms.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q367x2bks"/><path class="ae_9512ms"/>`,
		"fallback": "ion:tablet-landscape",
	});
}

export default Component;
