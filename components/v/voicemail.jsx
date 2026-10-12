import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vffgq3b1l.css';
import '../../css/m/mk91vlb4x.css';
import '../../css/z/z_weibblf.css';
import '../../css/l/ljqparbel.css';
import '../../css/l/l9u50bcwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vffgq3b1l"/><circle class="mk91vlb4x"/><circle class="z_weibblf"/><circle class="ljqparbel"/><path class="l9u50bcwi"/></g>`,
		"fallback": "andrsrxn:voicemail",
	});
}

export default Component;
