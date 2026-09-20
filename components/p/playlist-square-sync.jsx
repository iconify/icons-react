import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cbm0q25sg.css';
import '../../css/x/xp-frlgmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cbm0q25sg"/><path class="xp-frlgmx"/></g>`,
		"fallback": "streamline-freehand:playlist-square-sync",
	});
}

export default Component;
