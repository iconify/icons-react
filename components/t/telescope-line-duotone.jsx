import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t0-afhbzf.css';
import '../../css/g/gm5by03kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t0-afhbzf"/><path class="gm5by03kn"/></g>`,
		"fallback": "solar:telescope-line-duotone",
	});
}

export default Component;
