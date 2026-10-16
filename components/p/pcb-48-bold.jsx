import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeigp0whd.css';
import '../../css/z/z1rjnvbix.css';
import '../../css/r/r-ouyob9n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeigp0whd"/><path class="z1rjnvbix"/><path class="r-ouyob9n"/>`,
		"fallback": "energy-icons:pcb-48-bold",
	});
}

export default Component;
