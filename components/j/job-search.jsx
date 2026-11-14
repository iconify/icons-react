import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pbrurftxq.css';
import '../../css/t/tn4hw5lgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pbrurftxq"/><path class="tn4hw5lgp"/></g>`,
		"fallback": "hugeicons:job-search",
	});
}

export default Component;
