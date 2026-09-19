import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hw0ngrb8i.css';
import '../../css/u/upye-e8ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hw0ngrb8i"/><path class="upye-e8ei"/></g>`,
		"fallback": "iconoir:undo-action",
	});
}

export default Component;
