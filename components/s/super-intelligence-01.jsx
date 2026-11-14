import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uedd4mbdj.css';
import '../../css/s/snbo6wtuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uedd4mbdj"/><path class="snbo6wtuh"/></g>`,
		"fallback": "hugeicons:super-intelligence-01",
	});
}

export default Component;
