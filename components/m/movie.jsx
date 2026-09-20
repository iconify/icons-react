import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkrilib-s.css';
import '../../css/d/dh5-_5bqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkrilib-s"/><path clip-rule="evenodd" class="dh5-_5bqz"/>`,
		"fallback": "ix:movie",
	});
}

export default Component;
