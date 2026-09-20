import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amewfsb1m.css';
import '../../css/q/qjh4aybzr.css';
import '../../css/t/tcqd81b4h.css';
import '../../css/f/fy2tp5b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amewfsb1m"/><path class="qjh4aybzr"/><path class="tcqd81b4h"/><path class="fy2tp5b5h"/>`,
		"fallback": "uim:social-distancing",
	});
}

export default Component;
