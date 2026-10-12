import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/koloktvcd.css';
import '../../css/q/q0b14tbvl.css';
import '../../css/b/bmcdz44gi.css';
import '../../css/v/v7svjwiow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="koloktvcd"/><circle transform="rotate(90 12 12)" class="q0b14tbvl"/><circle transform="rotate(90 12 12)" class="bmcdz44gi"/><path class="v7svjwiow"/></g>`,
		"fallback": "andrsrxn:target-sight",
	});
}

export default Component;
