import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xxswp1bkt.css';
import '../../css/h/h8y-n3_nj.css';
import '../../css/z/ze0ey8bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xxswp1bkt"/><path class="h8y-n3_nj"/><path class="ze0ey8bkw"/></g>`,
		"fallback": "reicon:shop-add",
	});
}

export default Component;
