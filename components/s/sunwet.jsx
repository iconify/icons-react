import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziyt1r3lp.css';
import '../../css/w/wel9mzd3v.css';
import '../../css/l/lw5zwnyrs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziyt1r3lp"/><path class="wel9mzd3v"/><path class="lw5zwnyrs"/>`,
		"fallback": "selfhst:sunwet",
	});
}

export default Component;
