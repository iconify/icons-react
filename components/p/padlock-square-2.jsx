import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/kgc9d5hyw.css';
import '../../css/r/r6mffv2pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="kgc9d5hyw"/><path class="r6mffv2pr"/></g>`,
		"fallback": "streamline-sharp-color:padlock-square-2",
	});
}

export default Component;
