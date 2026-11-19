import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajvcl8b8o.css';
import '../../css/v/vicg34bwz.css';
import '../../css/w/w1ve46hlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajvcl8b8o"/><path clip-rule="evenodd" class="vicg34bwz"/><path class="w1ve46hlw"/></g>`,
		"fallback": "andrsrxn:shareplay",
	});
}

export default Component;
