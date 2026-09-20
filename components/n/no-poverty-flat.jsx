import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u0ofxlbuc.css';
import '../../css/d/de1kr4q_i.css';
import '../../css/e/ejrded2ld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u0ofxlbuc"/><path class="de1kr4q_i"/><path class="ejrded2ld"/></g>`,
		"fallback": "streamline-plump-color:no-poverty-flat",
	});
}

export default Component;
