import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0c4i_bfy.css';
import '../../css/a/a6hbzh8hq.css';
import '../../css/t/ta4qzbpzj.css';
import '../../css/i/i0uvhkbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y0c4i_bfy"/><path clip-rule="evenodd" class="a6hbzh8hq"/><path class="ta4qzbpzj"/><path clip-rule="evenodd" class="i0uvhkbov"/></g>`,
		"fallback": "streamline-sharp-color:laptop-camera-flat",
	});
}

export default Component;
