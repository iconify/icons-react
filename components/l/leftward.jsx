import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo9pswbtk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo9pswbtk"/>`,
		"fallback": "picon:leftward",
	});
}

export default Component;
