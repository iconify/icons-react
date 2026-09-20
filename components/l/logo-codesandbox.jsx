import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vmd6277yi.css';
import '../../css/l/ld-o23xbi.css';
import '../../css/l/lg0_szb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vmd6277yi"/><path clip-rule="evenodd" class="ld-o23xbi"/><path class="lg0_szb8x"/></g>`,
		"fallback": "tdesign:logo-codesandbox",
	});
}

export default Component;
