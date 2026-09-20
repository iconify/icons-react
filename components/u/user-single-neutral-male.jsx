import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/lavzwpgfl.css';
import '../../css/p/pteikwb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="lavzwpgfl"/><path class="pteikwb-y"/></g>`,
		"fallback": "streamline-sharp-color:user-single-neutral-male",
	});
}

export default Component;
