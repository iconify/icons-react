import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gngy5vaph.css';
import '../../css/q/qsez0nite.css';
import '../../css/e/e5jfj3b2v.css';
import '../../css/m/mfg1gacjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gngy5vaph"/><path class="qsez0nite"/><path class="e5jfj3b2v"/><path class="mfg1gacjw"/></g>`,
		"fallback": "hugeicons:mail-validation-02",
	});
}

export default Component;
