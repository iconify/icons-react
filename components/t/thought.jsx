import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7pr88bwn.css';
import '../../css/d/da2j-wbzl.css';
import '../../css/f/fgxhu6bwg.css';
import '../../css/u/u_yq4-b1f.css';
import '../../css/c/cluyahb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(135.7 3.76 19.69)" class="f7pr88bwn"/><path class="da2j-wbzl"/><path class="fgxhu6bwg"/><circle transform="rotate(90 3.76 19.3)" class="u_yq4-b1f"/><path class="cluyahb6d"/></g>`,
		"fallback": "andrsrxn:thought",
	});
}

export default Component;
