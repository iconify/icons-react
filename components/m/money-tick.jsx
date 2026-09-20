import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lh6ix6bdu.css';
import '../../css/h/hfz_8abyz.css';
import '../../css/x/xme47371x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lh6ix6bdu"/><path class="hfz_8abyz"/><path class="xme47371x"/></g>`,
		"fallback": "reicon:money-tick",
	});
}

export default Component;
