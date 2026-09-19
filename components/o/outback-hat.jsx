import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpu03_f-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpu03_f-i"/>`,
		"fallback": "game-icons:outback-hat",
	});
}

export default Component;
