import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxahim30c.css';
import '../../css/v/vapgi1b5o.css';
import '../../css/i/ip-75_awg.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGECSMuaCC"><g class="ft5dv1b6b"><path class="nxahim30c"/><circle class="vapgi1b5o"/><path class="ip-75_awg"/></g></mask></defs><path mask="url(#SVGECSMuaCC)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:key-alt-duotone-line",
	});
}

export default Component;
