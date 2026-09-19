import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_jz5xwqo.css';
import '../../css/n/nx8_58b1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_jz5xwqo"/><path class="nx8_58b1t"/>`,
		"fallback": "famicons:star-half",
	});
}

export default Component;
