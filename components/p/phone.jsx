import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekcb249mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekcb249mx"/>`,
		"fallback": "humbleicons:phone",
	});
}

export default Component;
