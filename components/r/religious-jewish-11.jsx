import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwx2ffbxx.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwx2ffbxx"/>`,
		"fallback": "maki:religious-jewish-11",
	});
}

export default Component;
