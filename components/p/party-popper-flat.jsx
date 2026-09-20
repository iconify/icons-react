import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utn616bjj.css';
import '../../css/x/xcd7v-s4w.css';
import '../../css/r/ryypy5fhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="utn616bjj"/><path class="xcd7v-s4w"/><path clip-rule="evenodd" class="ryypy5fhe"/></g>`,
		"fallback": "streamline-sharp-color:party-popper-flat",
	});
}

export default Component;
