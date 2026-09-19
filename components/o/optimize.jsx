import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fja7r230c.css';
import '../../css/r/rlhd26bov.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="fja7r230c"/><path class="rlhd26bov"/></g>`,
		"fallback": "icon-park-solid:optimize",
	});
}

export default Component;
