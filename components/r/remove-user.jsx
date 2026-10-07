import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t090o9qrh.css';
import '../../css/m/mpg0prmyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t090o9qrh"/><path class="mpg0prmyt"/></g>`,
		"fallback": "iconoir:remove-user",
	});
}

export default Component;
