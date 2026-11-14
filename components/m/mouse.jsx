import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/p/p1beatpiu.css';
import '../../css/m/mlr7zlqtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="p1beatpiu"/><path class="mlr7zlqtr"/></g>`,
		"fallback": "codex:mouse",
	});
}

export default Component;
