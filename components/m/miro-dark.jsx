import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1yzn8b3d.css';
import '../../css/v/vkrhsz27r.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n1yzn8b3d"/><path clip-rule="evenodd" class="vkrhsz27r"/></g>`,
		"fallback": "thesvg-color:miro-dark",
	});
}

export default Component;
