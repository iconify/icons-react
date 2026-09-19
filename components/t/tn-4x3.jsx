import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-p6sxs_x.css';
import '../../css/i/ibd8u0c8f.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-p6sxs_x"/><path class="ibd8u0c8f"/>`,
		"fallback": "flag:tn-4x3",
	});
}

export default Component;
