import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x20boo2xu.css';
import '../../css/d/d3r06hb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x20boo2xu"/><path class="d3r06hb1a"/></g>`,
		"fallback": "keyline-icons:plug-sharp-two-tone",
	});
}

export default Component;
