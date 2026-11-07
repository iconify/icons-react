import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpy6vikpy.css';
import '../../css/z/zsv18cbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpy6vikpy"/><path clip-rule="evenodd" class="zsv18cbys"/>`,
		"fallback": "solar:slider-vertical-minimalistic-bold",
	});
}

export default Component;
