import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n38oa1brm.css';
import '../../css/j/jvsnevb9a.css';
import '../../css/p/p5ishgb2d.css';
import '../../css/n/nr3gxq-ks.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n38oa1brm"/><path class="jvsnevb9a"/><path class="p5ishgb2d"/><path class="nr3gxq-ks"/></g>`,
		"fallback": "streamline-color:strawberry",
	});
}

export default Component;
