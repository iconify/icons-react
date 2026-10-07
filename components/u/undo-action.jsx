import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ukc-tbbor.css';
import '../../css/u/upye-e8ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ukc-tbbor"/><path class="upye-e8ei"/></g>`,
		"fallback": "iconoir:undo-action",
	});
}

export default Component;
