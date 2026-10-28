import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7r4hpltc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7r4hpltc"/>`,
		"fallback": "selfhst:llama-cpp-light",
	});
}

export default Component;
