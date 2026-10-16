import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffgrtx06n.css';
import '../../css/v/vm6sxcbbp.css';
import '../../css/s/skvsa8hkm.css';
import '../../css/n/nr8egexwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ffgrtx06n"/><path class="vm6sxcbbp"/><path class="skvsa8hkm"/><path class="nr8egexwf"/></g>`,
		"fallback": "andrsrxn:ribbon",
	});
}

export default Component;
