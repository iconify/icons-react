import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf9l5ddip.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf9l5ddip"/>`,
		"fallback": "zondicons:stethoscope",
	});
}

export default Component;
