import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvff_f-zu.css';
import '../../css/c/c_-1yhb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fvff_f-zu"/><path class="c_-1yhb_a"/></g>`,
		"fallback": "streamline-sharp-color:necktie-flat",
	});
}

export default Component;
