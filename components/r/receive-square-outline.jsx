import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo6u187sz.css';
import '../../css/h/hfmquscpz.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo6u187sz"/><path class="hfmquscpz"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:receive-square-outline",
	});
}

export default Component;
