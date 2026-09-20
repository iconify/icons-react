import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jg9w73huk.css';
import '../../css/m/mhqgp-wgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jg9w73huk"/><path class="mhqgp-wgi"/></g>`,
		"fallback": "streamline-sharp:pen-1",
	});
}

export default Component;
