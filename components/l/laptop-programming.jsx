import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wlm6s3bva.css';
import '../../css/i/iomr_8b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wlm6s3bva"/><path class="iomr_8b-u"/></g>`,
		"fallback": "hugeicons:laptop-programming",
	});
}

export default Component;
