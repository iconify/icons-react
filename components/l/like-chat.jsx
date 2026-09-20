import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j0ehi_b6f.css';
import '../../css/r/r7ryixj9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j0ehi_b6f"/><path class="r7ryixj9z"/></g>`,
		"fallback": "streamline-ultimate:like-chat",
	});
}

export default Component;
