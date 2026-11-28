import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p16iawbke.css';
import '../../css/h/h-83sh0dt.css';
import '../../css/k/kb498c-is.css';
import '../../css/t/tmzthsb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p16iawbke"/><path class="h-83sh0dt"/><path class="kb498c-is"/><path class="tmzthsb9o"/></g>`,
		"fallback": "iconaut:trophy-star",
	});
}

export default Component;
