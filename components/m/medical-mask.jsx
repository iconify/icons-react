import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6cmulb-y.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/q/q18shsb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f6cmulb-y"/><circle class="shu3xdl9q"/><path class="q18shsb-d"/></g>`,
		"fallback": "hugeicons:medical-mask",
	});
}

export default Component;
