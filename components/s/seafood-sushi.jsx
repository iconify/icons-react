import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cgeo_ccjt.css';
import '../../css/t/ttqcstbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cgeo_ccjt"/><path class="ttqcstbdm"/></g>`,
		"fallback": "streamline-ultimate:seafood-sushi",
	});
}

export default Component;
