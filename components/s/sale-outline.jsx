import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yadkeksry.css';
import '../../css/g/gv5s0h4bv.css';
import '../../css/i/i-h5fzmsn.css';
import '../../css/w/wf_6ujbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yadkeksry"/><path clip-rule="evenodd" class="gv5s0h4bv"/><path class="i-h5fzmsn"/><path class="wf_6ujbcc"/>`,
		"fallback": "solar:sale-outline",
	});
}

export default Component;
