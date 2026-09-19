import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9jnc9b3h.css';
import '../../css/l/l83296b_y.css';
import '../../css/g/gv7hefb0x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9jnc9b3h"/><path class="l83296b_y"/><circle class="gv7hefb0x"/>`,
		"fallback": "flat-color-icons:ipad",
	});
}

export default Component;
