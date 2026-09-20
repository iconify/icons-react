import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fsxwks63x.css';
import '../../css/s/sep7-euwy.css';
import '../../css/y/y5ye8hb2g.css';
import '../../css/g/ghup45byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fsxwks63x"/><path class="sep7-euwy"/><path class="y5ye8hb2g"/><path class="ghup45byo"/></g>`,
		"fallback": "streamline-freehand-color:meeting-presentation",
	});
}

export default Component;
