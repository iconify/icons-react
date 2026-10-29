import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lxqkkqmys.css';
import '../../css/t/td49gbbjb.css';
import '../../css/j/j314kuthn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lxqkkqmys"/><path class="td49gbbjb"/><path class="j314kuthn wm-a"/></g>`,
		"fallback": "withicons:rose",
	});
}

export default Component;
