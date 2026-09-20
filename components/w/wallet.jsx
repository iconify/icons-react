import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egt06k06i.css';
import '../../css/q/qvd0x3w7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="egt06k06i"/><path class="qvd0x3w7t"/></g>`,
		"fallback": "tdesign:wallet",
	});
}

export default Component;
