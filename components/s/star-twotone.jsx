import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm2tvb.css';
import '../../css/m/mnwdzw.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm2tvb"/><path class="mnwdzw"/>`,
		"fallback": "line-md:star-twotone",
	});
}

export default Component;
