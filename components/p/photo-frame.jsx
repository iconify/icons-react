import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x9ovypa8r.css';
import '../../css/z/z1itzbcot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x9ovypa8r"/><path class="z1itzbcot"/></g>`,
		"fallback": "streamline-ultimate:photo-frame",
	});
}

export default Component;
