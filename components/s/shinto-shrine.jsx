import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co2vxcczv.css';
import '../../css/x/xv14olbqm.css';
import '../../css/l/l1hhfn04f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co2vxcczv"/><path class="xv14olbqm"/><path class="l1hhfn04f"/></g>`,
		"fallback": "fluent-emoji-flat:shinto-shrine",
	});
}

export default Component;
