import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y8an-tb3i.css';
import '../../css/y/yjwwm6bdv.css';
import '../../css/g/gbmauw1xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="y8an-tb3i"/><path class="yjwwm6bdv"/><path class="gbmauw1xh"/></g>`,
		"fallback": "withicons:panel-top-sketch",
	});
}

export default Component;
