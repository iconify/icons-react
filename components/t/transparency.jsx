import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0fap9byy.css';
import '../../css/e/eax3dpvsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0fap9byy"/><path class="eax3dpvsz"/>`,
		"fallback": "boxicons:transparency",
	});
}

export default Component;
