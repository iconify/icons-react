import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/ymesfvjia.css';
import '../../css/f/fvp-2kb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ymesfvjia"/><path class="fvp-2kb-p"/></g>`,
		"fallback": "streamline-sharp-color:shovel-rake",
	});
}

export default Component;
