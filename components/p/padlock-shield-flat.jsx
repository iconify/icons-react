import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u95fdqnwb.css';
import '../../css/k/ku7fde-py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u95fdqnwb"/><path clip-rule="evenodd" class="ku7fde-py"/></g>`,
		"fallback": "streamline-sharp-color:padlock-shield-flat",
	});
}

export default Component;
