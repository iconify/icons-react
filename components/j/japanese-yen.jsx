import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m28cpcovm.css';
import '../../css/o/oceiybcet.css';
import '../../css/f/f8ufy2bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m28cpcovm wm-k"/><path class="oceiybcet wm-a"/><path class="f8ufy2bhm wm-deco"/></g>`,
		"fallback": "withicons-kawaii:japanese-yen",
	});
}

export default Component;
