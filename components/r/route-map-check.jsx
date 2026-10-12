import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cyxh3xb7u.css';
import '../../css/p/pkm41d2qt.css';
import '../../css/x/x5gynzb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="matrix(1 0 0 -1 1.67 21.73)" class="cyxh3xb7u"/><circle transform="matrix(1 0 0 -1 1.67 21.73)" class="pkm41d2qt"/><path class="x5gynzb7p"/></g>`,
		"fallback": "andrsrxn:route-map-check",
	});
}

export default Component;
