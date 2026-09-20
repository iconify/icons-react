import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s3jfpwb1n.css';
import '../../css/f/fybwjzj0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s3jfpwb1n"/><path class="fybwjzj0l"/></g>`,
		"fallback": "streamline-ultimate:shipping-logistic-damaged-package",
	});
}

export default Component;
