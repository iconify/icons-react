import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8a26skit.css';
import '../../css/p/pb9-u9byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t8a26skit"/><path class="pb9-u9byo"/></g>`,
		"fallback": "streamline-ultimate:keyhole-square",
	});
}

export default Component;
