import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/k/kun71ryne.css';
import '../../css/j/jepyzgbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><path class="kun71ryne"/><path class="jepyzgbgr"/></g>`,
		"fallback": "lets-icons:message-open-duotone-line",
	});
}

export default Component;
