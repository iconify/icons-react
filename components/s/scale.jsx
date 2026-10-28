import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abwtczb6z.css';
import '../../css/u/u-on63b5a.css';
import '../../css/c/cqufwccbp.css';
import '../../css/k/k2q77bbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 11.02 21.25)" class="abwtczb6z"/><rect transform="matrix(0 -1 -1 0 11.02 21.25)" class="u-on63b5a"/><path class="cqufwccbp"/><path class="k2q77bbek"/></g>`,
		"fallback": "andrsrxn:scale",
	});
}

export default Component;
