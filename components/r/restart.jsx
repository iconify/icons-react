import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rez0umi3s.css';
import '../../css/r/r48nej5ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rez0umi3s"/><path class="r48nej5ns"/></g>`,
		"fallback": "iconoir:restart",
	});
}

export default Component;
