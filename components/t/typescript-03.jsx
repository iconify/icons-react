import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wvgut8b1f.css';
import '../../css/k/knvp32e5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wvgut8b1f"/><path class="knvp32e5i"/></g>`,
		"fallback": "hugeicons:typescript-03",
	});
}

export default Component;
