import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tws2_vbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tws2_vbyo"/>`,
		"fallback": "noviair:syringe-check",
	});
}

export default Component;
