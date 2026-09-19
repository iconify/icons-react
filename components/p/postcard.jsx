import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paaeio2fp.css';
import '../../css/r/rx4b74v7b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paaeio2fp"/><path class="rx4b74v7b"/>`,
		"fallback": "ep:postcard",
	});
}

export default Component;
