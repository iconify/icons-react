import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ole243bii.css';
import '../../css/i/izkpyxa0t.css';
import '../../css/m/m17u19fal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ole243bii"/><path class="izkpyxa0t"/><path class="m17u19fal"/></g>`,
		"fallback": "withicons-bauhaus:sleigh",
	});
}

export default Component;
