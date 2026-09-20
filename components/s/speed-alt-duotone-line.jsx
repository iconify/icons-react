import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mqstwk_cf.css';
import '../../css/i/ixhzviblg.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8SaNDOQi"><g class="t_2lkqbxb"><path class="mqstwk_cf"/><path class="ixhzviblg"/></g></mask></defs><path mask="url(#SVG8SaNDOQi)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:speed-alt-duotone-line",
	});
}

export default Component;
