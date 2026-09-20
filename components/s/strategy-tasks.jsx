import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yym25ybbb.css';
import '../../css/i/iz5g4s_5f.css';
import '../../css/o/o2lgrpb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yym25ybbb"/><path class="iz5g4s_5f"/><path class="o2lgrpb8j"/></g>`,
		"fallback": "streamline-sharp:strategy-tasks",
	});
}

export default Component;
