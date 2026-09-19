import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf-21-0mo.css';
import '../../css/d/dum7nab_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf-21-0mo"/><path class="dum7nab_n"/>`,
		"fallback": "circum:medal",
	});
}

export default Component;
