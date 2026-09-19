import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wqr-41aca.css';
import '../../css/m/misun9bmf.css';
import '../../css/j/jterakbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wqr-41aca"/><circle class="misun9bmf"/><path class="jterakbqr"/></g>`,
		"fallback": "hugeicons:user-dollar",
	});
}

export default Component;
