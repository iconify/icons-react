import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmuhxn_ob.css';
import '../../css/s/skqfwtcpb.css';
import '../../css/r/rceakbbhv.css';
import '../../css/t/txfom6b-h.css';
import '../../css/d/dtz3229za.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dmuhxn_ob"/><path clip-rule="evenodd" class="skqfwtcpb"/><path clip-rule="evenodd" class="rceakbbhv"/><path class="txfom6b-h"/><path clip-rule="evenodd" class="dtz3229za"/></g>`,
		"fallback": "flagpack:mn",
	});
}

export default Component;
