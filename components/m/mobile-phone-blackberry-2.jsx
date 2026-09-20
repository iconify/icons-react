import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jxzvrf7nu.css';
import '../../css/b/b-i2wbkao.css';
import '../../css/n/nh14lfrds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jxzvrf7nu"/><path class="b-i2wbkao"/><path class="nh14lfrds"/></g>`,
		"fallback": "streamline-ultimate:mobile-phone-blackberry-2",
	});
}

export default Component;
