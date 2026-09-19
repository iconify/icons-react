import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krn2xfzde.css';
import '../../css/c/cg7d2pfom.css';
import '../../css/r/r_d7t_bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krn2xfzde"/><circle class="cg7d2pfom"/><circle class="r_d7t_bew"/>`,
		"fallback": "bx:message-dots",
	});
}

export default Component;
