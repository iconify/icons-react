import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ndoiikbvp.css';
import '../../css/h/hpp_p1b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ndoiikbvp"/><path class="hpp_p1b6m"/></g>`,
		"fallback": "streamline-sharp:voice-mail",
	});
}

export default Component;
