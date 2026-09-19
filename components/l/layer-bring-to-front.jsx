import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v8bvuvbpb.css';
import '../../css/g/ge-hqjguz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v8bvuvbpb"/><path class="ge-hqjguz"/></g>`,
		"fallback": "hugeicons:layer-bring-to-front",
	});
}

export default Component;
