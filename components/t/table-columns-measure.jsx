import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvmza-i6y.css';
import '../../css/u/urrbkqb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvmza-i6y"/><path class="urrbkqb9d"/></g>`,
		"fallback": "andrsrxn:table-columns-measure",
	});
}

export default Component;
