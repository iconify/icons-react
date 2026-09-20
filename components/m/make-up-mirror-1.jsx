import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o7jzxy5_e.css';
import '../../css/x/x3_26c47h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o7jzxy5_e"/><path class="x3_26c47h"/></g>`,
		"fallback": "streamline-ultimate:make-up-mirror-1",
	});
}

export default Component;
