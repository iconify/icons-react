import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tt175xbva.css';
import '../../css/v/vlckaelsc.css';
import '../../css/r/r-qbun4my.css';
import '../../css/l/ln9pwybam.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tt175xbva"/><path class="vlckaelsc"/><path class="r-qbun4my"/><path class="ln9pwybam"/></g>`,
		"fallback": "icon-park:kettle-one",
	});
}

export default Component;
