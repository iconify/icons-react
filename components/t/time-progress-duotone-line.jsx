import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igjudsbww.css';
import '../../css/u/u4chfjbjl.css';
import '../../css/z/z1gfgnbxc.css';
import '../../css/d/d93tk7y8k.css';
import '../../css/a/ab2d1gbfg.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGW7L6Ae1W"><g class="igjudsbww"><path class="u4chfjbjl"/><path class="z1gfgnbxc"/><path class="d93tk7y8k"/><path class="ab2d1gbfg"/></g></mask></defs><path mask="url(#SVGW7L6Ae1W)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:time-progress-duotone-line",
	});
}

export default Component;
