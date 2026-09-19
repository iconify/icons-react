import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b26kolbjj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b26kolbjj"/>`,
		"fallback": "f7:money-euro",
	});
}

export default Component;
