import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ig_an8pht.css';
import '../../css/e/e84fltbfd.css';
import '../../css/r/r_rvxacyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ig_an8pht"/><path class="e84fltbfd"/><path class="r_rvxacyt"/></g>`,
		"fallback": "streamline-ultimate:programming-hold-code-2",
	});
}

export default Component;
