import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzw13i4rv.css';
import '../../css/f/fuokirb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rzw13i4rv"/><path class="fuokirb5n"/></g>`,
		"fallback": "streamline-ultimate:tool-box",
	});
}

export default Component;
