import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k53f7pjls.css';
import '../../css/l/l614akbje.css';
import '../../css/v/vkj_ftrwz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k53f7pjls"/><path class="l614akbje"/><path class="vkj_ftrwz"/>`,
		"fallback": "streamline-pixel:phone-off-1",
	});
}

export default Component;
