import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnnap8b4p.css';
import '../../css/y/yyj7-pbhc.css';
import '../../css/x/x1x48ac7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnnap8b4p"/><path class="yyj7-pbhc"/><path class="x1x48ac7h"/>`,
		"fallback": "cbi:maxxair-fan-delux-closed",
	});
}

export default Component;
