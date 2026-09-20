import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs2csdkir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs2csdkir"/>`,
		"fallback": "mdi:stopwatch-pause-outline",
	});
}

export default Component;
