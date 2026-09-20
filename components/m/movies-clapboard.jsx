import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/esypnccyr.css';
import '../../css/v/vxxz6jbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="esypnccyr"/><path class="vxxz6jbrp"/></g>`,
		"fallback": "streamline-freehand:movies-clapboard",
	});
}

export default Component;
