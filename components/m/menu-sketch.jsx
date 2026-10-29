import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6hzsib7i.css';
import '../../css/u/uyydohbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f6hzsib7i"/><path class="uyydohbvy"/></g>`,
		"fallback": "withicons:menu-sketch",
	});
}

export default Component;
