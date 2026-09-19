import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/w/wkk1f-b-h.css';
import '../../css/g/ge1mxvm8x.css';
import '../../css/h/hsmz4cbpa.css';
import '../../css/j/j5wf84hfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="wkk1f-b-h"/><path class="ge1mxvm8x"/><path class="hsmz4cbpa"/><path class="j5wf84hfz"/></g>`,
		"fallback": "icon-park:shuffle-one",
	});
}

export default Component;
