import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7eyqi9kg.css';
import '../../css/e/eujo24bzi.css';
import '../../css/h/h13wcxb2s.css';
import '../../css/h/h7dqv975i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7eyqi9kg"/><path class="eujo24bzi"/><path class="h13wcxb2s"/><path class="h7dqv975i"/>`,
		"fallback": "token:rite",
	});
}

export default Component;
