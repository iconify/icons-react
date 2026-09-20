import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ksw71ybnc.css';
import '../../css/f/fsvxv_bku.css';
import '../../css/p/pl16qnbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ksw71ybnc"/><circle class="fsvxv_bku"/><circle class="pl16qnbxx"/></g>`,
		"fallback": "meteor-icons:music",
	});
}

export default Component;
