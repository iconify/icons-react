import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewxfdn_wl.css';
import '../../css/y/y51mhybdb.css';
import '../../css/u/udkm6e2mv.css';
import '../../css/j/j5582lbug.css';
import '../../css/m/ml-o_2bwh.css';

const viewBox = {"width":570,"height":104};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewxfdn_wl"/><path class="y51mhybdb"/><path class="udkm6e2mv"/><circle class="j5582lbug"/><path class="ml-o_2bwh"/>`,
		"fallback": "thesvg-color:te-logo-whiteorange",
	});
}

export default Component;
