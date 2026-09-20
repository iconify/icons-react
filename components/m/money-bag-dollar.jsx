import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pyse1pb9f.css';
import '../../css/i/in6zz_blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pyse1pb9f"/><path class="in6zz_blz"/></g>`,
		"fallback": "streamline-ultimate:money-bag-dollar",
	});
}

export default Component;
