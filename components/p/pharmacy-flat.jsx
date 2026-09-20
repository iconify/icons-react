import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfkaxlbyd.css';
import '../../css/h/hgv9lmd4w.css';
import '../../css/x/xkeyg-xbo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lfkaxlbyd"/><path clip-rule="evenodd" class="hgv9lmd4w"/><path clip-rule="evenodd" class="xkeyg-xbo"/></g>`,
		"fallback": "streamline-color:pharmacy-flat",
	});
}

export default Component;
