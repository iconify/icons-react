import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_diomx1n.css';
import '../../css/d/dki33cb-s.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_diomx1n"/><path class="dki33cb-s"/>`,
		"fallback": "topcoat:lock",
	});
}

export default Component;
