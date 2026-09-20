import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf8t2ubeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf8t2ubeu"/>`,
		"fallback": "thesvg-color:moscow-metro",
	});
}

export default Component;
