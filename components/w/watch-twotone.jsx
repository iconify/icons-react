import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kclhqr.css';
import '../../css/y/ydovum.css';
import '../../css/j/jmnoxq.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-45nhxp.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-from-0px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kclhqr ydovum"/><circle class="jmnoxq ydovum"/>`,
		"fallback": "line-md:watch-twotone",
	});
}

export default Component;
