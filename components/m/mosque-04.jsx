import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cccuktftm.css';
import '../../css/i/ibl2pebdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cccuktftm"/><path class="ibl2pebdj"/></g>`,
		"fallback": "hugeicons:mosque-04",
	});
}

export default Component;
