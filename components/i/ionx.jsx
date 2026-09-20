import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4j5qe54f.css';
import '../../css/p/p2sv7_dap.css';
import '../../css/f/fkg8wdbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4j5qe54f"/><path class="p2sv7_dap"/><path class="fkg8wdbmc"/>`,
		"fallback": "token:ionx",
	});
}

export default Component;
