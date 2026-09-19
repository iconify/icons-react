import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myquthk1w.css';
import '../../css/q/q_4uk-b_w.css';
import '../../css/n/nuj67m2yh.css';
import '../../css/o/o1fuzks_z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="myquthk1w"/><path class="q_4uk-b_w"/><path clip-rule="evenodd" class="nuj67m2yh"/><path class="o1fuzks_z"/></g>`,
		"fallback": "glyphs:sort-amount-down-outline",
	});
}

export default Component;
