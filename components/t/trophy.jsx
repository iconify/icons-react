import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/axk-y2beu.css';
import '../../css/g/gb1wd_b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="axk-y2beu"/><path class="gb1wd_b9g"/></g>`,
		"fallback": "iconoir:trophy",
	});
}

export default Component;
