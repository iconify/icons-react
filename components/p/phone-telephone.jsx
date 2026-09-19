import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9pfoqx_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9pfoqx_c"/>`,
		"fallback": "icon-park-outline:phone-telephone",
	});
}

export default Component;
