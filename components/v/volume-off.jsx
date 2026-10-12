import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qylfpj-0m.css';
import '../../css/p/p9b4vhmdm.css';
import '../../css/s/si5by1jrj.css';
import '../../css/q/qws7ylbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qylfpj-0m"/><path class="p9b4vhmdm"/><path class="si5by1jrj"/><path class="qws7ylbxp"/></g>`,
		"fallback": "andrsrxn:volume-off",
	});
}

export default Component;
