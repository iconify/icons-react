import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqapyabwu.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/n/nrala8f6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="dqapyabwu"/><circle class="dos_yhbgg"/><path class="nrala8f6n"/></g>`,
		"fallback": "hugeicons:music-3",
	});
}

export default Component;
