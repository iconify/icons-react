import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6150rhmg.css';
import '../../css/m/mkbjbvjtw.css';
import '../../css/w/ww5vvcbdd.css';
import '../../css/w/wu32awiep.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6150rhmg"/><path class="mkbjbvjtw"/><path class="ww5vvcbdd"/><path class="wu32awiep"/></g>`,
		"fallback": "streamline-flex-color:watch-square-menu",
	});
}

export default Component;
