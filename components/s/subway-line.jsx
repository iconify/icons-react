import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrmx9tb8s.css';
import '../../css/l/lnud8ybje.css';
import '../../css/w/w990p7q3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wrmx9tb8s"/><path class="lnud8ybje"/><path class="w990p7q3a"/></g>`,
		"fallback": "tdesign:subway-line",
	});
}

export default Component;
