import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uek8olv5j.css';
import '../../css/j/joveyip1f.css';
import '../../css/o/okmpui6ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uek8olv5j"/><path class="joveyip1f"/><path class="okmpui6ix"/></g>`,
		"fallback": "hugeicons:stairs-02",
	});
}

export default Component;
