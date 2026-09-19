import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it8p9ubjn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it8p9ubjn"/>`,
		"fallback": "cib:playstation3",
	});
}

export default Component;
