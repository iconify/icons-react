import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lybqr_27c.css';
import '../../css/b/btz76nbfi.css';
import '../../css/z/zurft_ftu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lybqr_27c"/><path class="btz76nbfi"/><path class="zurft_ftu"/></g>`,
		"fallback": "reicon:refresh-2",
	});
}

export default Component;
