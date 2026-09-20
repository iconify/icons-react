import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb4h_tb7x.css';
import '../../css/e/eozwp4bxx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb4h_tb7x"/><path class="eozwp4bxx"/>`,
		"fallback": "nimbus:stop",
	});
}

export default Component;
