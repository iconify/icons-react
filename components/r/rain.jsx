import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk_c3ib5a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk_c3ib5a"/>`,
		"fallback": "picon:rain",
	});
}

export default Component;
