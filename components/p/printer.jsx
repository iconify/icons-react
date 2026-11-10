import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7-s-gbak.css';
import '../../css/g/gwnsqtyee.css';
import '../../css/h/h12msvbuz.css';
import '../../css/a/ahklu1bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a7-s-gbak"/><path class="gwnsqtyee"/><path class="h12msvbuz"/><path class="ahklu1bar"/></g>`,
		"fallback": "andrsrxn:printer",
	});
}

export default Component;
