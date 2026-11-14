import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2705r1-z.css';
import '../../css/g/g48w89bvm.css';
import '../../css/y/yx1j7mbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p2705r1-z"/><path class="g48w89bvm"/><path class="yx1j7mbhh"/></g>`,
		"fallback": "hugeicons:money-receive-01",
	});
}

export default Component;
