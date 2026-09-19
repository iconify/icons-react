import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mabaapu1g.css';
import '../../css/h/hhh60ljkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mabaapu1g"/><path class="hhh60ljkn"/>`,
		"fallback": "boxicons:shape-subtract",
	});
}

export default Component;
