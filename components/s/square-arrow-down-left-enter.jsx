import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/upzce1bdl.css';
import '../../css/s/s5ndeshyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="upzce1bdl"/><path class="s5ndeshyt"/></g>`,
		"fallback": "lucide:square-arrow-down-left-enter",
	});
}

export default Component;
