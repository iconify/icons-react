import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0c_ah97o.css';
import '../../css/s/s55t7eb7x.css';
import '../../css/p/pcrg3rbex.css';
import '../../css/c/cq26eac9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0c_ah97o"/><path class="s55t7eb7x"/><path class="pcrg3rbex"/><path class="cq26eac9g"/></g>`,
		"fallback": "streamline-kameleon-color:light-bulb-pop",
	});
}

export default Component;
