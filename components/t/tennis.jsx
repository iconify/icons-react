import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tluxxvblp.css';
import '../../css/f/fe50rmbaz.css';
import '../../css/n/nnixupllg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="tluxxvblp"/><path class="fe50rmbaz wm-k"/><path class="nnixupllg wm-a"/></g>`,
		"fallback": "withicons-kawaii:tennis",
	});
}

export default Component;
