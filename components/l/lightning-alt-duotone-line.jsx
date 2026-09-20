import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dih714bjx.css';
import '../../css/e/elefkcc4m.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXEoPXcvl"><g class="ft5dv1b6b"><path class="dih714bjx"/><path class="elefkcc4m"/></g></mask></defs><path mask="url(#SVGXEoPXcvl)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:lightning-alt-duotone-line",
	});
}

export default Component;
