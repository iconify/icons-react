import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/z8_trpbqw.css';
import '../../css/q/qf5bvwb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="z8_trpbqw"/><path class="qf5bvwb-h"/></g>`,
		"fallback": "streamline-logos:kai-os-logo",
	});
}

export default Component;
