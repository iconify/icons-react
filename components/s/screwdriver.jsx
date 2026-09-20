import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwjd4obrs.css';
import '../../css/d/dzk841b_w.css';
import '../../css/q/q402exb0f.css';
import '../../css/y/yx2eunost.css';
import '../../css/l/l5-fymbxs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwjd4obrs"/><path class="dzk841b_w"/><path class="q402exb0f"/><path class="yx2eunost"/><path class="l5-fymbxs"/>`,
		"fallback": "openmoji:screwdriver",
	});
}

export default Component;
