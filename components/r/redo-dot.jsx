import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/suw67z4bs.css';
import '../../css/p/plbg7nf0v.css';
import '../../css/r/r71_f-bif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="suw67z4bs"/><path class="plbg7nf0v"/><path class="r71_f-bif"/></g>`,
		"fallback": "hugeicons:redo-dot",
	});
}

export default Component;
