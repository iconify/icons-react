import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yegc-sbkr.css';
import '../../css/l/l390iecly.css';
import '../../css/o/oxf-v8-ae.css';
import '../../css/d/d1ccs6skz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yegc-sbkr"/><path class="l390iecly"/><path class="oxf-v8-ae"/><path class="d1ccs6skz"/>`,
		"fallback": "selfhst:ksuite-kchat",
	});
}

export default Component;
