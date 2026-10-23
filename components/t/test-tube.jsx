import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a4hw9ib_n.css';
import '../../css/y/ydpokubwa.css';
import '../../css/v/vogjf-lhc.css';
import '../../css/w/wj8pt-b4q.css';
import '../../css/d/d4e3dfxmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="a4hw9ib_n"/><path class="ydpokubwa"/><path class="vogjf-lhc"/><path class="wj8pt-b4q"/><path class="d4e3dfxmp"/></g>`,
		"fallback": "matita:test-tube",
	});
}

export default Component;
