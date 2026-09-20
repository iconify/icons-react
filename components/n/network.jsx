import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8kknxbiv.css';
import '../../css/g/gtj4olbgd.css';
import '../../css/c/cu8f4bbdp.css';
import '../../css/u/umfgsn4hd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8kknxbiv"/><path class="gtj4olbgd"/><path class="cu8f4bbdp"/><path class="umfgsn4hd"/></g>`,
		"fallback": "streamline-color:network",
	});
}

export default Component;
