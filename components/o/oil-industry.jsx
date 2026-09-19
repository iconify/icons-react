import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ezmunibeu.css';
import '../../css/e/ewni57blg.css';
import '../../css/a/aphhpd_hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ezmunibeu"/><path class="ewni57blg"/><path class="aphhpd_hw"/></g>`,
		"fallback": "iconoir:oil-industry",
	});
}

export default Component;
