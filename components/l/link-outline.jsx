import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luwxsnbji.css';
import '../../css/p/pqfht_-da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luwxsnbji"/><path class="pqfht_-da"/>`,
		"fallback": "eva:link-outline",
	});
}

export default Component;
