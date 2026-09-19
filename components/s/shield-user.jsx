import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r8sbv39ff.css';
import '../../css/n/nb2gogbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r8sbv39ff"/><path class="nb2gogbna"/></g>`,
		"fallback": "hugeicons:shield-user",
	});
}

export default Component;
