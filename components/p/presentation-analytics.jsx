import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h_zubrbnu.css';
import '../../css/f/fjamxrbfg.css';
import '../../css/w/wt23-gdai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h_zubrbnu"/><path class="fjamxrbfg"/><path class="wt23-gdai"/></g>`,
		"fallback": "streamline-freehand:presentation-analytics",
	});
}

export default Component;
