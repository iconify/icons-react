import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v6thdh7bf.css';
import '../../css/p/pj5v24aaj.css';
import '../../css/f/fiihxccoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v6thdh7bf"/><path class="pj5v24aaj"/><path class="fiihxccoc"/></g>`,
		"fallback": "streamline-freehand-color:playlist-album-1",
	});
}

export default Component;
