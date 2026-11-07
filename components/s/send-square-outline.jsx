import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v81dzmbmg.css';
import '../../css/s/s7o6tu02b.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v81dzmbmg"/><path class="s7o6tu02b"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:send-square-outline",
	});
}

export default Component;
