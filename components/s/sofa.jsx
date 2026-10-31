import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o6vjmzbne.css';
import '../../css/w/w5csx8bkx.css';
import '../../css/q/qvz456bey.css';
import '../../css/a/al00fdnhm.css';
import '../../css/r/rgradbhcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="o6vjmzbne wm-shadow"/><path class="w5csx8bkx wm-shadow"/><path class="qvz456bey"/><path class="al00fdnhm"/><path class="rgradbhcn"/></g>`,
		"fallback": "withicons-brutal:sofa",
	});
}

export default Component;
