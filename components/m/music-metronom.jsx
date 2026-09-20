import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xrlkeeovk.css';
import '../../css/l/ls0yphzjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xrlkeeovk"/><path class="ls0yphzjb"/></g>`,
		"fallback": "streamline-freehand:music-metronom",
	});
}

export default Component;
