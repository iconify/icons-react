import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vbd70wppp.css';
import '../../css/s/s41omdbbh.css';
import '../../css/l/lb3mijz1r.css';
import '../../css/l/lvmdmwb6j.css';
import '../../css/e/eh2fp3h8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="vbd70wppp"/><path class="s41omdbbh"/><path class="lb3mijz1r"/><path class="lvmdmwb6j"/><path class="eh2fp3h8s"/></g>`,
		"fallback": "icon-park:upload-logs",
	});
}

export default Component;
