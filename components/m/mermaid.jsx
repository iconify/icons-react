import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxrlj8owt.css';
import '../../css/g/gburgu3hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fxrlj8owt"/><path class="gburgu3hu"/></g>`,
		"fallback": "tdesign:mermaid",
	});
}

export default Component;
